from PIL import Image
import numpy as np
import os

img_path = r'c:\Mechanical wings\website\public\WhatsApp Image 2026-02-27 at 3.04.03 PM.jpeg'
out_path = r'c:\Mechanical wings\website\public\logo-transparent.png'

img = Image.open(img_path).convert('RGBA')
data = np.array(img)

# Make white/near-white pixels transparent (threshold: RGB all > 240)
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
white_mask = (r > 240) & (g > 240) & (b > 240)
data[white_mask] = [255, 255, 255, 0]

# For near-white pixels (220-240), make semi-transparent for smooth edges
near_white = (r > 220) & (g > 220) & (b > 220) & ~white_mask
whiteness = np.minimum(r, np.minimum(g, b)).astype(float)
alpha_factor = np.clip((255 - whiteness) / 35, 0, 1)
data[near_white, 3] = (alpha_factor[near_white] * 255).astype(np.uint8)

result = Image.fromarray(data)

# Crop to non-transparent content (the actual logo)
bbox = result.getbbox()
if bbox:
    pad = 10
    x1 = max(0, bbox[0] - pad)
    y1 = max(0, bbox[1] - pad)
    x2 = min(result.width, bbox[2] + pad)
    y2 = min(result.height, bbox[3] + pad)
    result = result.crop((x1, y1, x2, y2))
    print(f"Cropped from {img.size} to {result.size}")
    print(f"Bounding box was: {bbox}")

result.save(out_path, 'PNG', optimize=True)
size_kb = os.path.getsize(out_path) / 1024
print(f"Saved to {out_path}")
print(f"File size: {size_kb:.1f} KB")
