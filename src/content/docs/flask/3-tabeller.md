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