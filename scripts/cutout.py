"""Knock the dark backdrop out of a studio product render.

Two steps, and the order matters:

1. Subtract the backdrop's pedestal so the surrounding frame is pure black.
2. Derive alpha from the remaining luminance and un-premultiply the colour.

Doing (2) without (1) is what produces grey halos around the subject: the
backdrop's own colour (say 22,25,36) divided by a small alpha explodes into a
bright fringe. Once the backdrop is 0, those pixels stay 0 and disappear
cleanly.

Usage:
    python3 scripts/cutout.py <render.png> <out.png> [pct] [thresh] [gain]

    pct     percentile of the border taken as the backdrop level (default 94).
            Raise if a faint rectangle survives.
    thresh  luminance that becomes fully opaque (default 34). Lower keeps more
            of the subject's dark areas solid.
    gain    brightness restored after subtraction (default 1.08).
"""
import sys

import numpy as np
from PIL import Image

src_path, out_path = sys.argv[1], sys.argv[2]
pct = float(sys.argv[3]) if len(sys.argv) > 3 else 94.0
thresh = float(sys.argv[4]) if len(sys.argv) > 4 else 34.0
gain = float(sys.argv[5]) if len(sys.argv) > 5 else 1.08

img = Image.open(src_path).convert("RGB")
a = np.asarray(img).astype(np.float32)
h, w, _ = a.shape

# --- 1. flatten the backdrop to black -------------------------------------
bh, bw = max(4, h // 18), max(4, w // 18)
border = np.concatenate([
    a[:bh].reshape(-1, 3), a[-bh:].reshape(-1, 3),
    a[:, :bw].reshape(-1, 3), a[:, -bw:].reshape(-1, 3),
])
pedestal = np.percentile(border, pct, axis=0)
sub = np.clip((a - pedestal) * gain, 0, 255)
print("backdrop pedestal (r,g,b) =", np.round(pedestal, 1).tolist())

# --- 2. alpha from what's left --------------------------------------------
lum = 0.2126 * sub[..., 0] + 0.7152 * sub[..., 1] + 0.0722 * sub[..., 2]
t = np.clip(lum / thresh, 0.0, 1.0)
alpha = t * t * (3.0 - 2.0 * t)          # smoothstep

safe = np.maximum(alpha, 1e-2)[..., None]
rgb = np.clip(sub / safe, 0, 255)
rgb = np.where(alpha[..., None] > 0, rgb, 0)

# Feather the outermost pixels so the frame edge can never show.
fy, fx = np.ones(h, np.float32), np.ones(w, np.float32)
ry, rx = max(2, h // 60), max(2, w // 60)
fy[:ry], fy[-ry:] = np.linspace(0, 1, ry), np.linspace(1, 0, ry)
fx[:rx], fx[-rx:] = np.linspace(0, 1, rx), np.linspace(1, 0, rx)
alpha *= fy[:, None] * fx[None, :]

out = np.dstack([rgb, alpha * 255.0]).astype(np.uint8)
Image.fromarray(out).save(out_path)

print(f"wrote {out_path}: "
      f"{(alpha < 0.02).mean() * 100:.1f}% transparent, "
      f"{(alpha > 0.98).mean() * 100:.1f}% opaque")
