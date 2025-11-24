---
title: Terminalen
description: Oppsett av terminalen på Windows/Mac.
---

## Nyttige terminal-kommandoer

| Kommando       | Hva den gjør                 |
| -------------- | ---------------------------- |
| `cd MAPPENAVN` | Gå inn i en mappe            |
| `pwd`          | Vis hvilken mappe du er i nå |
| `ls`           | Vis alle filer i mappen      |
| `mkdir NAVN`   | Lag en ny mappe              |
| `rm FILNAVN`   | Slett en fil                 |
| `clear`        | Tøm skjermen i terminalen    |
| `code .`       | Åpne denne mappen i VS Code  |

## Anbefalt terminal

- Mac: [iTerm2](https://iterm2.com/)
- Windows: [Windows terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US)

## Pakkebehandlere (package managers)

En **pakkebehandler** er et verktøy i terminalen som gjør det enkelt å installere programmer.  
I stedet for å laste ned fra en nettside og trykke "Neste, Neste, Fullfør", kan vi skrive én kommando.  

### Installere pakkebehandlere

- **Mac:** [Homebrew](https://brew.sh/)  
- **Windows:** [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget) (allerede installert på Windows 10/11 – du trenger ikke gjøre noe).  

### Eksempler på bruk

- **Mac (brew):**  
  - `brew search spotify` → søk etter program  
  - `brew install spotify` → installer program  
- **Windows (winget):**  
  - `winget search spotify` → søk etter program og finn ID  
  - `winget install Spotify.spotify` → installer program med ID  

Disse kan brukes til **utviklingsverktøy også**, f.eks. `brew install git` eller `winget install git`.  

## Fancy terminal

Standard-terminalen fungerer helt fint, men det finnes verktøy som gjør den både penere og mer nyttig:  
- **Mac:** [`oh-my-zsh`](https://ohmyz.sh/)  
- **Windows:** [`oh-my-posh`](https://ohmyposh.dev/docs/installation/windows)  

Fordeler: temaer, bedre oversikt, og nyttige snarveier.  
