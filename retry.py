import urllib.request
def dl(url, path):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
    with urllib.request.urlopen(req) as res, open(path, 'wb') as f:
        f.write(res.read())

dl('https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', 'public/brands/samsung.svg')
dl('https://upload.wikimedia.org/wikipedia/commons/e/ea/Blue_Star_Ltd._Logo.svg', 'public/brands/bluestar.svg')
dl('https://upload.wikimedia.org/wikipedia/commons/e/e8/Voltas_Logo.svg', 'public/brands/voltas.svg')
dl('https://upload.wikimedia.org/wikipedia/commons/3/30/Godrej_Logo.svg', 'public/brands/godrej.svg')
