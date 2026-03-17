import urllib.request
import json
import os

logos = {
    'daikin': 'https://cdn.worldvectorlogo.com/logos/daikin.svg',
    'mitsubishi': 'https://cdn.worldvectorlogo.com/logos/mitsubishi-electric.svg',
    'lg': 'https://cdn.worldvectorlogo.com/logos/lg-electronics.svg',
    'samsung': 'https://cdn.worldvectorlogo.com/logos/samsung.svg',
    'carrier': 'https://cdn.worldvectorlogo.com/logos/carrier.svg',
    'hitachi': 'https://cdn.worldvectorlogo.com/logos/hitachi.svg',
    'panasonic': 'https://cdn.worldvectorlogo.com/logos/panasonic.svg',
    'whirlpool': 'https://cdn.worldvectorlogo.com/logos/whirlpool.svg',
    'godrej': 'https://cdn.worldvectorlogo.com/logos/godrej-1.svg',
    'voltas': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Voltas_Logo.svg'
}

req_headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in logos.items():
    path = f'public/brands/{name}.svg'
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f'Downloaded {name}')
    except Exception as e:
         print(f'Failed {name}: {e}')
