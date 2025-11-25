---
title: Tabeller
description: Tabeller i Flask.
---

HTML-tabeller er nyttige for å vise lister og ordbøker fra Python på en enkel og fin måte.

I app.py sendes en liste med personer til html-fila index.html.

```python {5-9, 13}
from flask import Flask, render_template, request

app = Flask(__name__)

personer = [
    {"Navn": "Thor", "Alder": 35, "By": "Kristiansand"},
    {"Navn": "Martin", "Alder": 37, "By": "Bergen"},
    {"Navn": "Ravi", "Alder": 45, "By": "Tønsberg"}
]

@app.get("/")
def rute_index():
    return render_template("index.html", personer=personer)

app.run(debug=True)
```

### HTML

I HTML lages tabeller med `<table>`-taggen, som deles inn i `<thead>` for overskrifter og `<tbody>` for innhold.
Linjer i tabellen defineres i `<tr>` og datapunkter med `<td>`.

I IT2 gidder vi ikke style tabellene våre, så vi bruker et CSS-rammeverk - se linje 7.

For-løkken på linjene 19 til 25 går lager en rad for hver person i listen personer.

```html {7,19-25}
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabeller i Flask</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Navn</th>
                <th>Alder</th>
                <th>By</th>
            </tr>
        </thead>
        <tbody>
            {% for person in personer %}
            <tr>
                <td>{{person["Navn"]}}</td>
                <td>{{person["Alder"]}}</td>
                <td>{{person["By"]}}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</body>
</body>
</html>
```

## Oppgaver

### 2. Energiinhold i frokost 

> Oppgave 3 fra eksamen høsten 2013

Det er vanlig å bruke kilokalorier (kcal) som mål på hvor mye energi mat inneholder. Denne energien får vi i oss i form av proteiner, fett og karbohydrater. Alle matvarer har forskjellig andel av disse tre, og under ser du en tabell som viser hvor mye proteiner, fett og karbohydrater det er i «typiske» frokostenheter.

#### Tabell over frokostenheter:

| Matvare                   | Kcal | Protein (i gram) | Fett (i gram) | Karbohydrater (i gram) |
| ------------------------- | ---- | ---------------- | ------------- | ---------------------- |
| Lettmelk (1 glass à 2 dl) | 92   | 6.6              | 3             | 9.6                    |
| 1 egg                     | 80   | 6.9              | 5.5           | 0.7                    |
| Grovbrød (1 skive = 40 g) | 103  | 3.5              | 1             | 19.6                   |
| Smør (til 1 brødskive)    | 36   | 0.025            | 4.1           | 0.025                  |
| Gulost (1 skive)          | 53   | 4                | 4.2           | 0                      |


Du skal lage en applikasjon til en webside der brukeren får se denne tabellen, som kan brukes til å utføre følgende oppgaver:

- Med utgangspunkt i tabellen skal brukeren kunne sette sammen sin egen frokost av disse matvarene, ta utskrift av hvor mange kcal denne frokosten inneholder totalt, og få vist fordeling av kcal på de ulike matvarene i frokosten ~~i et diagram (søylediagram, kakediagram eller annet)~~ i prosent.