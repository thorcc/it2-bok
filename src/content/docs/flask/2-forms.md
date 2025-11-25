---
title: Forms
description: Send data fra HTML til Python med Forms.
---

Med *Forms* og Flask kan vi sende data fra html til Python.

## Eksempel: Hallo, navn!

app.py
```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.get("/")
def rute_index():
    return render_template("index.html")

@app.get("/hallo")
def rute_hallo():
    navn = request.values.get("navn") # henter navn som ble sendt fra html
    return render_template("hallo.html", navn=navn)

app.run(debug=True)
```

templates/index.html

```html
<form action="/hallo" method="get">
    <label>Navn:</label>
    <input type="text" name="navn">
    <button type="submit">Send inn</button>
</form>
```

templates/hallo.html

```html
<h1>Hallo, {{navn}}!</h1>
```

## Input-elementer

Alle input-elementer må ha attributten `name`, det er en som angir navnet input-verdien får i app.py.

For eksempel kan verdien til dette input-elementet: 

```html 
<input type="number" name="alder">
``` 

hentes ut i app.py med 
```python
request.values.get("alder")
```

### Liste over input-elementer

Her er noen vanlige input-elementer.

| Element                               | På nettsiden                        |
| ------------------------------------- | ----------------------------------- |
| `<input type="text" name="NAVN">`     | <input type="text" name="NAVN">     |
| `<input type="number" name="NAVN">`   | <input type="number" name="NAVN">   |
| `<input type="checkbox" name="NAVN">` | <input type="checkbox" name="NAVN"> |
| `<input type="color" name="NAVN">`    | <input type="color" name="NAVN">    |
| `<input type="date" name="NAVN">`     | <input type="date" name="NAVN">     |
| `<input type="file" name="NAVN">`     | <input type="file" name="NAVN">     |
| `<input type="hidden" name="NAVN">`   | <input type="hidden" name="NAVN">   |
| `<input type="password" name="NAVN">` | <input type="password" name="NAVN"> |

### Eksempel: brukernavn og passord

```html
 <form action="/logg-inn" method="post">
  <label for="brukernavn">Brukernavn:</label><br>
  <input type="text" id="brukernavn" name="brukernavn"><br>
  <label for="passord">Passord:</label><br>
  <input type="password" id="passord" name="passord">
  <button type="submit">Logg inn</button>
</form> 
```
<div style="border: solid 1px black; padding: 5px;">
 <form>
  <label for="brukernavn">Brukernavn:</label><br>
  <input type="text" id="brukernavn" name="brukernavn"><br>
  <label for="passord">Passord:</label><br>
  <input type="password" id="passord" name="passord">
  <button style="background-color: lightgrey; border-radius:2px; margin-top: 4px;">Logg inn</button>
 </form> 
</div>

app.py

```python
...

@app.post("/logg-inn")
def rute_hallo():
    brukernavn = request.values.get("brukernavn") 
    passord = request.values.get("passord")
    # gjør noe med brukernavn og passord..
    return render_template("index.html")

...
```

> post-metoden viser ikke det som sendes i url-en.

## Radioknapper

Radioknapper lar brukeren velge mellom flere valg, der bare ett valg kan velges om gangen.
For at det skal fungere må alle radio-knappene ha samme `name`.

<form>
<fieldset>
    <legend>Velg din favoritt:</legend>
    <div>
        <input type="radio" id="ronny" name="favoritt" value="ronny" checked>
        <label for="ronny">Ronny</label>
    </div>
    <div>
        <input type="radio" id="hermine" name="favoritt" value="hermine">
        <label for="hermine">Hermine</label>
    </div>
    <div>
        <input type="radio" id="harry" name="favoritt" value="harry">
        <label for="harry">Harry</label>
    </div>
</fieldset>
  <button style="background-color: lightgrey; border-radius:2px; margin-top: 4px;">Velg</button>
</form>

```html
<form action="/valg">
    <fieldset>
      <legend>Velg din favoritt:</legend>
    
      <div>
        <input type="radio" id="ronny" name="favoritt" value="ronny" checked>
        <label for="ronny">Ronny</label>
      </div>
    
      <div>
        <input type="radio" id="hermine" name="favoritt" value="hermine">
        <label for="hermine">Hermine</label>
      </div>
    
      <div>
        <input type="radio" id="harry" name="favoritt" value="harry">
        <label for="harry">Harry</label>
      </div>
    </fieldset>
    <button type="submit">Velg</button>
</form>
```


```python
...

@app.post("/valg")
def rute_hallo():
    favoritt = request.values.get("favoritt") # favoritt er enten ronny, hermine eller harry
    # gjør noe med favoritt..
    return render_template("index.html")

...
```

> `<fieldset>` og `<legend>` lager en ramme rundt radio-knappene.

## Avkrysningsbokser

Avkrysningsbokser lar brukeren krysse av flere bokser, i Python blir verdiene til `True` eller `False`.

<form action="">
    <fieldset>
        <legend>Choose your monster's features:</legend>
        <div>
            <input type="checkbox" id="scales" name="scales" checked>
            <label for="scales">Scales</label>
        </div>
        <div>
            <input type="checkbox" id="horns" name="horns">
            <label for="horns">Horns</label>
        </div>
    </fieldset>
  <button style="background-color: lightgrey; border-radius:2px; margin-top: 4px;">Velg</button>
</form>


```html
<form action="/valg">
    <fieldset>
        <legend>Choose your monster's features:</legend>

        <div>
            <input type="checkbox" id="scales" name="scales" checked>
            <label for="scales">Scales</label>
        </div>

        <div>
            <input type="checkbox" id="horns" name="horns">
            <label for="horns">Horns</label>
        </div>
    </fieldset>
    <button type="submit">Velg</button>
</form>
```

```python
...

@app.post("/valg")
def rute_hallo():
    scales = request.values.get("scales") # True/False
    horns = request.values.get("horns") # True/False
    # gjør noe med scales og horns..
    return render_template("index.html")

...
```

## Nedtrekksboks

<fieldset>
<label for="pet-select">Choose a pet:</label>
<select name="pets" id="pet-select">
  <option value="" selected>--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
</fieldset>

```html
<label for="pet-select">Choose a pet:</label>

<select name="pets" id="pet-select">
  <option value="" selected>--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
```

```python
...

@app.post("/valg")
def rute_hallo():
    pets = request.values.get("pets") # verdien til det som er valgt
    # gjør noe med pets..
    return render_template("index.html")

...
```

### Nedtrekksboks med valg fra Python-liste

<fieldset>
<select name="favorittdyr">
    <option value="" selected="">--Trykk her for å velge--</option>
    <option value="dyr">Hund</option>
    <option value="dyr">Katt</option>
    <option value="dyr">Hamster</option>
    <option value="dyr">Edderkopp</option>
    <option value="dyr">Papegøye</option>
</select>
</fieldset>

```html
<select name="favorittdyr">
    <option value="" selected>--Trykk her for å velge--</option>
    {% for dyr in dyreliste %}
        <option value="dyr">{{dyr}}</option>
    {% endfor %}
</select>
```

```python
from flask import Flask, render_template, request

app = Flask(__name__)

dyreliste = ["Hund", "Katt", "Hamster", "Edderkopp", "Papegøye"]

@app.get("/")
def rute_index():
    return render_template("index.html", dyreliste=dyreliste)

app.run(debug=True)
```

## Oppgaver

### 1. Aktivitetskalkulator

> Oppgave 2 fra eksamen høsten 2019

Lag en applikasjon som beregner kaloriforbruk for en gitt aktivitet - en slags treningskalkulator.
Beregningen skal basere seg på valgt **aktivitet** i kombinasjon med valgt **intensitet** og **varighet** på treningen.

#### Krav

- Brukeren skal kunne velge mellom disse fem aktivitetene:
  - Aerobics (841 kcal/time)
  - Bordtennis (236 kcal/time)
  - Fotball (510 kcal/time)
  - Golf (244 kcal/time)
  - Jogging (666 kcal/time)
- Brukeren skal kunne velge mellom disse intensitetsnivåene:
  - Lavt (Du kan gange kaloriforbruket med 0,8 for å trekke fra 20 %.)
  - Middels (Kaloriforbruket som er oppgitt.)
  - Høyt (Du kan gange kaloriforbruket med 1,2 for å kegge til 20 %.)
  - Brukeren skal kunne oppgi varighet i minutter.

- Løsningen skal implementeres etter denne grensesnittskissen (*wireframe*):
  - Brukeren skal velge aktivitet fra en nedtrekksliste.
  - Brukeren skal velge intensitet på treningen ved å velge én av tre radiobuttons.
  - Brukeren skal oppgi varighet på treningen i minutter i et tekstfelt.
  - Ved klikk på knappen skal kaloriforbruket for valgt aktivitet, intensitet og angitt varighet beregnes og vises.

![2-h19](../../../assets/bilder/h19-2.png)

