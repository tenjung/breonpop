import os
from psd_tools import PSDImage
from PIL import Image

def convert_psd_to_jpg(folder_path):
    print(f"Scanning folder: {folder_path}")
    for filename in os.listdir(folder_path):
        if filename.lower().endswith('.psd'):
            filepath = os.path.join(folder_path, filename)
            outpath = os.path.join(folder_path, filename[:-4] + '.jpg')
            
            # Skip if already exists
            if os.path.exists(outpath):
                print(f"Skipping {filename} (Already converted)")
                continue
                
            print(f"Converting: {filename}")
            try:
                psd = PSDImage.open(filepath)
                img = psd.composite()
                
                # Handle alpha channels for JPEG saving
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    background = Image.new('RGB', img.size, (255, 255, 255)) # White background
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[3]) # Use alpha channel as mask
                    background.save(outpath, 'JPEG', quality=90)
                else:
                    img = img.convert('RGB')
                    img.save(outpath, 'JPEG', quality=90)
                    
                print(f"✅ Saved: {outpath}")
            except Exception as e:
                print(f"❌ Error converting {filename}: {e}")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    target_folder = os.path.join(current_dir, 'public', 'breon')
    convert_psd_to_jpg(target_folder)
