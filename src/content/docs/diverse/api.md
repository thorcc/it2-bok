---
title: API
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

## Oppgaver

## 3. Chuck Norris-vitser

1. Lag et Python-program som henter en Chuck Norris-vits og printer den terminalen.
2. Bruk Flask, og lag en nettside som viser en ny Chuck Norris-vits hver gang siden oppdateres.

## 4. Politikere på Stortinget

I denne oppgaven skal du bruke Stortingets API: [data.stortinget.no](https://data.stortinget.no).

- Regjering: [https://data.stortinget.no/eksport/regjering?format=json](https://data.stortinget.no/eksport/regjering?format=json)
- Bilder: [https://data.stortinget.no/eksport/personbilde?personid=JGS&storrelse=middels](https://data.stortinget.no/eksport/personbilde?personid=JGS&storrelse=middels)


1. Lag en nettside som viser en navn (fornavn + etternavn) og tittel til alle medlemmene i regjeringen i en tabell.
2. Bruk medlemmenes `id` og vis bilde i en egen kolonne i tabellen.

### Tips: lister i HTML med Flask

```html
<ul>
    {% for ting in liste %}
        <li>{{ting}}</li>
    {% endfor %}
</ul>
```