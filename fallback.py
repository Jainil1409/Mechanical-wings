import urllib.request

def download_fallback(url, path):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(path, 'wb') as out:
                out.write(response.read())
        print(f"Downloaded {path}")
    except Exception as e:
        print(f"Failed {path}: {e}")

download_fallback('https://upload.wikimedia.org/wikipedia/commons/e/e8/Voltas_Logo.svg', 'public/brands/voltas.svg')
download_fallback('https://upload.wikimedia.org/wikipedia/commons/3/30/Godrej_Logo.svg', 'public/brands/godrej.svg')
