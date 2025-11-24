---
title: Web-scraping med cookies
description: Web-scraping med cookies.
---

## Hente cookies fra nettleseren

- Last ned utvidelse
  - Firefox: [cookies.txt](https://addons.mozilla.org/nb-NO/firefox/addon/cookies-txt/)
  - Chrome: [Get cookies.txt locally](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc)
- Besøk siden du vil hente data fra, logg inn og så videre..
- Last ned `cookies.txt` fra extension
- Åpne fila i VS-Code

## Bruke cookies i en request

```python
import requests

cookies = {
    'en_cookie': 'verdi', 
    'en_annen_cookie': 'verdi2'
}
respons = requests.get('https://example.com/api', cookies=cookies)

print(respons.text)
```

## Web scraping i Python

- [realpython.com/python-web-scraping-practical-introduction/](https://realpython.com/python-web-scraping-practical-introduction/#use-an-html-parser-for-web-scraping-in-python)


```python
# pip install beautifulsoup4
# pip install requests

from bs4 import BeautifulSoup
import requests

respons = requests.get("https://example.com")
html = respons.text
soup = BeautifulSoup(html, "html.parser")

# Finn et enkelt element
element = soup.select_one("main")
print(element.text)

# Finn mange elementer
viktige_saker = soup.select(".viktigSak")
for sak in viktige_saker:
    print(sak.text)

```