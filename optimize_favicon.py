from PIL import Image

def make_square_favicon():
    img_path = r'C:\Mechanical wings\website\public\logo-transparent.png'
    out_path = r'C:\Mechanical wings\website\src\app\icon.png'
    
    # Open the transparent logo
    img = Image.open(img_path)
    
    # Get the larger dimension to create a square
    width, height = img.size
    max_dim = max(width, height)
    
    # Add a little padding so the logo doesn't touch the absolute edges of the tab
    padded_dim = int(max_dim * 1.1)
    
    # Create a new completely transparent square image
    square_img = Image.new('RGBA', (padded_dim, padded_dim), (255, 255, 255, 0))
    
    # Calculate the position to paste the original image so it's perfectly centered
    paste_x = (padded_dim - width) // 2
    paste_y = (padded_dim - height) // 2
    
    # Paste the original image onto the center of the transparent square
    square_img.paste(img, (paste_x, paste_y))
    
    # Resize to a standard high-quality favicon size
    final_icon = square_img.resize((256, 256), Image.Resampling.LANCZOS)
    
    # Save it to the app directory (Next.js will pick this up automatically)
    final_icon.save(out_path)
    print(f"Successfully generated perfect square favicon at: {out_path}")

if __name__ == '__main__':
    make_square_favicon()
