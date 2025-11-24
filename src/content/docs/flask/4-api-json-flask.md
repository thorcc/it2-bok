---
title: API-er
description: API-er og Flask.
---

**API**-er (Application Programming Interface) er tjenester som lar programmer å snakke sammen.  
Vi kan bruke et API til å hente data fra en nettside eller en tjeneste.  

Når vi henter data fra et API i Python, får vi ofte svaret i **JSON-format**.  

## GET-requests i Python

For å hente data fra et API bruker vi pakken **requests**.
Den må installeres med `pip install requests`.

```python
import requests

respons = requests.get("https://google.com")

print(f"Status kode: {respons.status_code}")
print(f"Respons-tekst: {respons.text}")
```

- `status_code` forteller om forespørselen var vellykket (200 betyr OK).
- `text` gir oss selve innholdet fra nettsiden.

## Hente JSON-data

```python
import requests

respons = requests.get("https://api.chucknorris.io/jokes/random")
print(f"Status kode: {respons.status_code}")
data = respons.json()
print(data)
```

## Oppgave 1

1. Lag et Python-program som henter en Chuck Norris-vits og printer den terminalen.
2. Bruk Flask, og lag en nettside som viser Chuck Norris-vitser

### Tips: Flask-oppsett

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hallo, verden!"

if __name__ == "__main__":
    app.run(debug=True)
```


## Oppgave 2

I denne oppgaven skal du bruke Stortingets API: [data.stortinget.no](https://data.stortinget.no).

- Regjering: [https://data.stortinget.no/eksport/regjering?format=json](https://data.stortinget.no/eksport/regjering?format=json)
- Dagens representanter: [https://data.stortinget.no/eksport/dagensrepresentanter?format=json](https://data.stortinget.no/eksport/dagensrepresentanter?format=json)
- Bilder: [https://data.stortinget.no/eksport/personbilde?personid=JGS&storrelse=middels](https://data.stortinget.no/eksport/personbilde?personid=JGS&storrelse=middels)

1. Lag et Python-program som henter listen med representanter fra Stortingets API og printer listen i terminalen.
2. Utvid programmet slik at det går gjennom listen med politikere, og printer info om hver politiker på en strukturert måte, eks: FORNAVN ETTERNAVN (PARTI)
3. Bruk Flask, og lag en nettside som viser en oversikt over alle politikerene
4. Legg til knapper eller lenker for sortering på partier

### Tips: lister i HTML med Flask

```html
<ul>
    {% for ting in liste %}
        <li>{{ting}}</li>
    {% endfor %}
</ul>
```