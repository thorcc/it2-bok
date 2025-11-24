---
title: Hallo, verden!
description: Et eksempel på oppsett av Flask.
---

> Flask er et rammeverk (framework) for å lage nettsider med Python.
> Det kan installeres med `pip install flask` og importeres som en modul i .py-filer.

## Eksempel: Hallo, verden!

```python
# importerer Flask fra flask-modulen
from flask import Flask

# oppretter en app som har samme navn som filnavnet
app = Flask(__name__)

# en rute for /
@app.get("/")
def hello_world():
    return "<h1>Hallo, verden!</h1>"

# kjører appen og debug-modus
app.run(debug=True)

```

