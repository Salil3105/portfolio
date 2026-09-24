"""Usage: python3 scripts/cutout_light.py <white-bg-render.png> <out.png>

Cut the white studio backdrop out of the light-theme portrait.

Luminance alone can't do it: the t-shirt and the plant pot are as white as
the backdrop. (The two white cards behind the bulb and rocket are left to
go with the backdrop on purpose — their edges are too faint to cut cleanly,
and the icons read better floating free anyway.) So this is a marker-based watershed
on the gradient: background grows in from the frame, foreground from every
clearly non-white pixel plus seed boxes on those white objects, and the two
meet along real edges. Shadows in the backdrop (under the laptop, mug,
phone, notebook) stay as soft semi-transparent shade so they read on any
page colour, and anything the crop cuts through fades out instead of
ending in a straight line — no "photo frame" edge on the page.

Seed boxes are (y0, y1, x0, x1) in source pixels, specific to the render.
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

solid = (lum < 185) | (sat > 30)                         # clearly not backdrop
markers = np.zeros((H, W), np.int16)
markers[solid] = 2
SEEDS = [
    (575, 790, 575, 740),     # t-shirt
    (985, 1105, 1190, 1250),  # plant pot
    (1095, 1135, 20, 225),    # notebook pages
]
white_fg = np.zeros((H, W), bool)
for y0, y1, x0, x1 in SEEDS:
    markers[y0:y1, x0:x1] = 2
    white_fg[y0:y1, x0:x1] = True
frame = np.zeros((H, W), bool); frame[:3] = frame[-3:] = True; frame[:, :3] = frame[:, -3:] = True
markers[frame] = 1

lab = ndi.watershed_ift(cost, markers)
bg = lab == 1

# soft shade for the backdrop region: darker-than-white pixels there are
# shadows, re-expressed as a translucent dark tone
S = np.array([26, 26, 38], np.float32)
Lbg, Ls = 252.0, 0.2126*S[0] + 0.7152*S[1] + 0.0722*S[2]
a_bg = np.clip((Lbg - lum) / (Lbg - Ls), 0, 1)
# the desk surface itself reads as a faint uniform tint; drop that floor so
# only real contact shadows survive
a_bg = np.clip((a_bg - 0.07) / 0.93, 0, 1)

yy, xx = np.mgrid[:H, :W]
def fade(d, n):
    t = np.clip(d / n, 0, 1)
    return t * t * (3 - 2 * t)
# fade leftover shade toward every edge of the crop
edge = np.minimum.reduce([yy, H - 1 - yy, xx, W - 1 - xx]).astype(np.float32)
a_bg = a_bg * fade(edge, 140.0)

alpha = np.where(bg, a_bg, 1.0)
rgb = np.where(bg[..., None], S, C)

# Edge band on the subject (curls, glasses arms, leaf tips): those pixels are
# anti-aliased blends with the white backdrop. Unmix each against white using
# the nearest *solid* subject pixel as its true colour, so the white share
# becomes transparency instead of a pale fringe. Skipped where the object is
# itself white (t-shirt, pot) — there's nothing to unmix, it'd just eat them.
fg = ~bg
band = fg & (ndi.distance_transform_edt(fg) <= 6)
# ...and the few backdrop pixels just outside it, which are the same kind of
# blend — left to the shade pass they'd become a thin grey rim
band |= bg & (ndi.distance_transform_edt(bg) <= 3)
# "true colour" comes from the solid core a few px in: the yellow/blue icons'
# anti-aliased rims are saturated enough to count as solid themselves, and
# unmixing a pixel against itself leaves the cream rim fully opaque
core = ndi.binary_erosion(solid, iterations=3)
_, (iy, ix) = ndi.distance_transform_edt(~core, return_indices=True)
Fin = C[iy, ix]
near_white = ndi.binary_dilation(white_fg & fg, iterations=40)
band &= ~near_white
# alpha by projecting (white - pixel) onto (white - core colour) across all
# three channels, so a yellow rim is judged on its blue channel, not luma
dC, dF = 255 - C, 255 - Fin
a_band = np.clip((dC * dF).sum(-1) / np.maximum((dF * dF).sum(-1), 1), 0, 1)
unmix = (C - (1 - a_band[..., None]) * 255) / np.maximum(a_band[..., None], 1e-3)
F_band = np.where(a_band[..., None] > 0.35, np.clip(unmix, 0, 255), Fin)
alpha = np.where(band, a_band, alpha)
rgb = np.where(band[..., None], F_band, rgb)

# the crop cuts through the notebook, the plant and the desk: fade the
# subject out toward the left, right and bottom edges so nothing ends in a
# straight line (the top is clear — the hair sits well inside it)
side = np.minimum.reduce([H - 1 - yy, xx, W - 1 - xx]).astype(np.float32)
alpha = alpha * fade(side, 80.0)

# hairline feather
alpha = ndi.gaussian_filter(alpha, 0.6)

out_im = np.dstack([np.clip(rgb, 0, 255), np.clip(alpha, 0, 1) * 255]).astype(np.uint8)
Image.fromarray(out_im).save(out, optimize=True)
print("bg fraction", round(float(bg.mean()), 3))
