"""Knock the dark background out of a product render.

The render was lit on a near-black backdrop, so luminance is a good alpha
channel: background -> transparent, subject/glow -> opaque. RGB is
un-premultiplied so compositing over black reproduces the original exactly.
"""
import sys
import numpy as np
from PIL import Image

src_path, out_path = sys.argv[1], sys.argv[2]
lo = float(sys.argv[3]) if len(sys.argv) > 3 else None
hi = float(sys.argv[4]) if len(sys.argv) > 4 else None

img = Image.open(src_path).convert("RGB")
rgb = np.asarray(img).astype(np.float32)
lum = 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]

h, w = lum.shape
corner = np.concatenate([
    lum[:h // 12, :w // 12].ravel(), lum[:h // 12, -w // 12:].ravel(),
    lum[-h // 12:, :w // 12].ravel(), lum[-h // 12:, -w // 12:].ravel(),
])
pcts = np.percentile(lum, [1, 10, 25, 50, 75, 90, 99])
print(f"size={w}x{h}")
print("lum percentiles [1,10,25,50,75,90,99] =", np.round(pcts, 1).tolist())
print(f"corner bg: mean={corner.mean():.1f} p95={np.percentile(corner,95):.1f} max={corner.max():.1f}")

if lo is None:
    lo = float(np.percentile(corner, 97))          # everything at backdrop level -> gone
if hi is None:
    hi = lo + 26.0                                  # short ramp keeps the glow soft
print(f"using lo={lo:.1f} hi={hi:.1f}")

t = np.clip((lum - lo) / max(hi - lo, 1e-6), 0.0, 1.0)
alpha = t * t * (3.0 - 2.0 * t)                     # smoothstep

# Un-premultiply so `rgb * alpha` over black == original pixel.
safe = np.maximum(alpha, 1e-3)[..., None]
out_rgb = np.clip(rgb / safe, 0, 255)
out_rgb = np.where(alpha[..., None] > 0, out_rgb, 0)

out = np.dstack([out_rgb, alpha * 255.0]).astype(np.uint8)
Image.fromarray(out, "RGBA").save(out_path)

op = (alpha > 0.98).mean() * 100
tr = (alpha < 0.02).mean() * 100
print(f"wrote {out_path}: {tr:.1f}% transparent, {op:.1f}% opaque")

# Usage:
#   python3 scripts/cutout.py <render.png> <public/art-projects.png> [lo] [hi]
# `lo`/`hi` are luminance thresholds (defaults are derived from the corners).
# Raise `lo` if a faint haze remains around the subject; lower it if the
# subject's dark areas start disappearing.
