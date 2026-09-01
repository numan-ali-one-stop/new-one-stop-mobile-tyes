"""
Downloads the hero image, converts to optimised WebP, saves to public/images/.
"""

import urllib.request
import os
import sys

SOURCE_URL = (
    "https://lh3.googleusercontent.com/aida-public/"
    "AB6AXuCkBG0IJpjzs6EM4TcrUQ9-IgBuRIkBVo4K4Lg_QKXWzno2bUx-whraVhCQ5t6JSKjnlUORG5H6CRTNO6qYSFJiCAa3y-"
    "BS3r25dIuJaOSP_NftKPP1QAI4vKpA4a7wxlTA3Wr9UdRUyNkmcfEOVwoaIcwfFgUCB0GfcitYmd18gDVZIcKNJdm9FONQY8_0603"
    "sMLSECmHs4VhpGOveTt3zFUwX3vh_OT3kO9gJ_ZW2aO9zmEyELgFYFRJqaHNUuRzlsYp7R2z5Ouc"
)

OUT_DIR = "/vercel/share/v0-project/public/images"
OUT_FILE = os.path.join(OUT_DIR, "hero-tyre-fitting.webp")

os.makedirs(OUT_DIR, exist_ok=True)

try:
    from PIL import Image
    import io
    
    print("[v0] Downloading hero image...")
    req = urllib.request.Request(SOURCE_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
    print(f"[v0] Downloaded {len(data)/1024:.1f} KB")

    print("[v0] Converting to WebP...")
    img = Image.open(io.BytesIO(data))
    
    # Resize to max width 1600 preserving aspect ratio
    max_w = 1600
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.LANCZOS)
    
    img.save(OUT_FILE, "WEBP", quality=82, method=6)
    size = os.path.getsize(OUT_FILE)
    print(f"[v0] WebP saved: {size/1024:.1f} KB → {OUT_FILE}")

except ImportError:
    # Pillow not available — just download the original and save as-is
    print("[v0] Pillow not available, saving original image...")
    req = urllib.request.Request(SOURCE_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
    with open(OUT_FILE.replace('.webp', '.jpg'), 'wb') as f:
        f.write(data)
    print(f"[v0] Saved original: {len(data)/1024:.1f} KB")
    sys.exit(1)
