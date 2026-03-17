import urllib.request
import os

logos = {
    'daikin': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Daikin_logo.svg',
    'mitsubishi': 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Mitsubishi-logo.png',
    'lg': 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg',
    'samsung': 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    'carrier': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Carrier_Corporation_logo.svg',
    'hitachi': 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Hitachi_logo.svg',
    'bluestar': 'https://download.logo.wine/logo/Blue_Star_Limited/Blue_Star_Limited-Logo.wine.png',
    'voltas': 'https://download.logo.wine/logo/Voltas/Voltas-Logo.wine.png',
    'whirlpool': 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Whirlpool_Corporation_logo.svg',
    'panasonic': 'https://upload.wikimedia.org/wikipedia/commons/5/52/Panasonic_logo_%28Blue%29.svg',
    'godrej': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Godrej_Logo.svg',
    'haier': 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Haier_logo.svg'
}

req_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

for name, url in logos.items():
    ext = url.split('.')[-1].split('?')[0]
    path = f'public/brands/{name}.{ext}'
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f'Downloaded {name}')
    except Exception as e:
         print(f'Failed {name}: {e}')
