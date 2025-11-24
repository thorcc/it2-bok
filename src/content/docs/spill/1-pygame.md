---
title: Pygame
---

> OBS! Dette notatet er gammelt. Les heller kapitlene om Pygame i Smidig IT2.

## Oppsett

```python
import pygame

# Oppsett av pygame
pygame.init()
BREDDE = 600 # bredde på vinduet
HOYDE = 600  # høyde på vinduet
vindu = pygame.display.set_mode((BREDDE, HOYDE))
klokke = pygame.time.Clock()
kjorer = True

# OPPSETT AV SPILL HER:

while kjorer:
    # fyll skjermen med en farge for å fjerne alt fra forrige frame
    vindu.fill("black")
    
    # Hendelser
    for hendelse in pygame.event.get():
        # pygame.QUIT hendelsen skjer når brukeren klikke på X for å lukke vinduet
        if hendelse.type == pygame.QUIT:
            kjorer = False


    # Input fra tastatur:
    taster = pygame.key.get_pressed()
    if taster[pygame.K_UP]:
        print("pil opp")
    if taster[pygame.K_s]:
        print("s")

    # Input fra mus:
    mus_posisjon = pygame.mouse.get_pos()
    mus_klikk = pygame.mouse.get_pressed()
    if mus_klikk[0]:
        print(f"Venstre klikk i posisjon {mus_posisjon}")
    if mus_klikk[1]:
        print(f"Hjul-klikk i posisjon {mus_posisjon}")
    if mus_klikk[2]:
        print(f"Høyreklikk i posisjon {mus_posisjon}")

    # Oppdater spill her:


    # Tegn på skjermen her:


    # flip() oppdater vinduet med alle endringer
    pygame.display.flip()

    # klokke.tick(60) begrenser spillet til 60 FPS (frames per second)
    klokke.tick(60) 

pygame.quit()
```

## Bilder

### Tegne bilder på skjermen

```python
# last inn bilde før gameloopen (i oppsett)
badeball_bilde = pygame.image.load("badeball.png")

# Tegn (blit) bilde på vinduet eller en annen surface
# i gameloopen, under "Tegn på skjerm her:"
vindu.blit(badeball_bilde, (100, 200))
```

### Transformering av bilder

```python
badeball_bilde = pygame.image.load("badeball.png")

# transformasjoner endrer ikke orginalbilde, de returnerer et nytt bilde
flippa_badeball_bilde = pygame.transform.flip(badeball_bilde, True, True) # (bilde, flip_x?, flip_y?)


skalert_badeball_bilde = pygame.transform.scale(badeball_bilde, (50, 50))  # skalerer bildet til 50x50
rotert_badeball_bilde = pygame.transform.rotate(badeball_bilde, 45)  # roterer 45 grader
```

## Kollisjoner

### Mellom Rects

Kollisjon mellom to `Rect`-objekter kan sjekkes med metoden `colliderect`.

```python
# i oppsett:
spiller_rect = pygame.Rect(50, 50, 100, 100)
fiende_rect = pygame.Rect(400, 50, 100, 100)

# i gameloopen:
if spiller_rect.colliderect(fiende_rect):
    print("Kollisjon")
```

### Mellom mus og Rect

Kollisjon mellom mus og et `Rect`-objekt kan sjekkes med metoden `collidepoint`.

```python
# i oppsett

boks_font =  pygame.font.SysFont('Arial', 50)
boks_tekst = boks_font.render('Trykk på meg!', False, "white")
boks_rect = boks_tekst.get_rect()
# plasserer boksen midt på skjermen
boks_rect.x = BREDDE / 2 
boks_rect.y = HOYDE / 2

# i gameloopen:
mus_posisjon = pygame.mouse.get_pos()
mus_klikk = pygame.mouse.get_pressed()
if mus_klikk[0]:
    if boks_rect.collidepoint(mus_posisjon):
        print("Du klikket på boksen!")

# Tegner tekstboksen
vindu.blit(boks_tekst, boks_rect)
```
