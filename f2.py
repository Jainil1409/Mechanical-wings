import urllib.request
def d(url, path):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as res, open(path, 'wb') as f:
        f.write(res.read())

d('https://cdn.worldvectorlogo.com/logos/samsung.svg', 'public/brands/samsung.svg')
d('https://cdn.worldvectorlogo.com/logos/godrej-1.svg', 'public/brands/godrej.svg')
d('https://cdn.worldvectorlogo.com/logos/voltas-1.svg', 'public/brands/voltas.svg')
d('https://upload.wikimedia.org/wikipedia/commons/e/ea/Blue_Star_Ltd._Logo.svg', 'public/brands/bluestar.svg')
