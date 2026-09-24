"""Usage: python3 scripts/cutout_light.py <white-bg-render.png> <out.png>

Cut the white studio backdrop out of the light-theme portrait.

Luminance alone can't do it: the shirt cuff (251) is as bright as the
backdrop (254). So this is a marker-based watershed on the gradient:
background grows in from the frame, foreground from every clearly
non-white pixel plus seeds on the shirt/cuffs, and they meet along real
edges. The desk's contact shadows stay as soft semi-transparent shade so
they read on any page colour.
"""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

src, out = sys.argv[1], sys.argv[2]
C = np.array(Image.open(src).convert("RGB")).astype(np.float32)
H, W, _ = C.shape
lum = 0.2126*C[...,0] + 0.7152*C[...,1] + 0.0722*C[...,2]
sat = C.max(-1) - C.min(-1)

# gradient cost (edges are expensive to cross)
g = np.hypot(ndi.sobel(lum, 0), ndi.sobel(lum, 1))
cost = np.clip(g / g.max() * 255 * 3, 0, 255).astype(np.uint8)

markers = np.zeros((H, W), np.int16)
markers[(lum < 185) | (sat > 30)] = 2                     # clearly not backdrop
for (y, x, r) in [(640, 560, 18), (950, 645, 22), (1040, 725, 12),
                  (700, 600, 18), (860, 620, 20), (660, 420, 10)]:
    yy, xx = np.ogrid[:H, :W]
    markers[(yy - y)**2 + (xx - x)**2 <= r*r] = 2        # shirt / cuffs
frame = np.zeros((H, W), bool); frame[:3] = frame[-3:] = True; frame[:, :3] = frame[:, -3:] = True
markers[frame] = 1

lab = ndi.watershed_ift(cost, markers)
bg = lab == 1

# soft shade for the backdrop region: darker-than-white pixels there are
# contact shadows, re-expressed as a translucent dark tone
S = np.array([26, 26, 38], np.float32)
Lbg, Ls = 252.0, 0.2126*S[0] + 0.7152*S[1] + 0.0722*S[2]
a_bg = np.clip((Lbg - lum) / (Lbg - Ls), 0, 1)
# the desk surface itself reads as a faint uniform tint; drop that floor so
# only real contact shadows (under the laptop, phone, notebook) survive
a_bg = np.clip((a_bg - 0.07) / 0.93, 0, 1)
# and fade whatever shade is left toward the frame, so the crop line of the
# desk never shows as a straight edge on the page
yy, xx = np.mgrid[:H, :W]
edge = np.minimum.reduce([yy, H - 1 - yy, xx, W - 1 - xx]).astype(np.float32)
t = np.clip(edge / 140.0, 0, 1)
a_bg = a_bg * (t * t * (3 - 2 * t))

alpha = np.where(bg, a_bg, 1.0)
rgb = np.where(bg[..., None], S, C)

# Edge band on the subject (curls, glasses arms, leaf tips): those pixels are
# anti-aliased blends with the white backdrop. Unmix each against white using
# the nearest *solid* subject pixel as its true colour, so the white share
# becomes transparency instead of a pale fringe.
fg = ~bg
band = fg & (ndi.distance_transform_edt(fg) <= 4)
solid = (lum < 185) | (sat > 30)
_, (iy, ix) = ndi.distance_transform_edt(~solid, return_indices=True)
Fin = C[iy, ix]
Lin = 0.2126*Fin[...,0] + 0.7152*Fin[...,1] + 0.0722*Fin[...,2]
a_band = np.clip((255 - lum) / np.maximum(255 - Lin, 1), 0, 1)
unmix = (C - (1 - a_band[..., None]) * 255) / np.maximum(a_band[..., None], 1e-3)
F_band = np.where(a_band[..., None] > 0.35, np.clip(unmix, 0, 255), Fin)
alpha = np.where(band, a_band, alpha)
rgb = np.where(band[..., None], F_band, rgb)

# hairline feather
alpha = ndi.gaussian_filter(alpha, 0.6)

out_im = np.dstack([np.clip(rgb, 0, 255), np.clip(alpha, 0, 1) * 255]).astype(np.uint8)
Image.fromarray(out_im).save(out, optimize=True)
print("bg fraction", round(float(bg.mean()), 3))
