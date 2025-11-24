---
title: Python
description: Oppsett av Python på Windows/Mac.
---

## Installere Python

Ikke bruk **brew** eller **winget** til å installere Python – de versjonene kan skape problemer.  

- Last ned fra [python.org/downloads](https://www.python.org/downloads/)  
- Installer på vanlig måte.  

Etterpå:  
- **Mac:** dobbeltklikk `Install Certificates` i Python-mappen.  
- **Windows:** husk å huke av for *"Add to PATH"* under installasjonen.  

Test installasjonen:  
- Mac: `python3 --version`  
- Windows: `python --version`  

---

## Virtuelle miljøer (venv)

Når vi jobber med prosjekter, trenger vi ofte ekstra Python-pakker.  
For å unngå kaos (og feil versjoner), lager vi et **virtuelt miljø**. Da blir pakkene installert bare i prosjektmappen, ikke på hele PC-en.  

---

### Opprette et virtuelt miljø
1. Gå inn i prosjektmappen med `cd` (eller åpne mappen i VS Code).  
2. Kjør:  
   - Mac: `python3 -m venv venv`  
   - Windows: `python -m venv venv`  

Her betyr:  
- `-m venv` → bruk Pythons innebygde verktøy for virtuelle miljøer  
- `venv` → navnet på mappen (du kan kalle den noe annet, men `venv` er standard)  

---

### Starte et virtuelt miljø
- **Mac:** `source venv/bin/activate`  
- **Windows:** `venv\Scripts\Activate.ps1`  

 Når miljøet er aktivt, ser du `(venv)` foran linja i terminalen.  
Du kan skru det av med `deactivate`.  

---

### Installere pakker
- `pip install PAKKENAVN`  

Eksempel:  
- `pip install yt-dlp` 

### Requirements-fil

En **requirements.txt** er en liste over alle pakkene prosjektet trenger.  

- Lag filen: `pip freeze > requirements.txt`  
- Installer alt fra filen: `pip install -r requirements.txt`  

Dette er spesielt nyttig når du deler kode – da kan andre installere alt med én kommando.  
