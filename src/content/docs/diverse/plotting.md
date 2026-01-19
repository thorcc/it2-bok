---
title: Plotting med Flask
---

Dette dokumentet gir en oversikt over de vanligste plot-typene i **Chart.js**, med enkle eksempler tilpasset bruk sammen med **Flask**, **Jinja** og `tojson`.

Eksemplene forutsetter at Flask sender følgende data til HTML:

```python
navn = ["Thor", "Martin", "Ravi"]
alder = [35, 37, 45]
```

I HTML må Chart.js være lastet inn:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

---

## 1. Søylediagram (bar)

Brukes for å sammenligne verdier.

```html
<canvas id="barChart"></canvas>

<script>
const navn = {{ navn | tojson }};
const alder = {{ alder | tojson }};

new Chart(barChart, {
    type: "bar",
    data: {
        labels: navn,
        datasets: [{
            label: "Alder",
            data: alder
        }]
    }
});
</script>
```

---

## 2. Linjediagram (line)

Brukes for å vise utvikling over tid.

```html
<canvas id="lineChart"></canvas>

<script>
new Chart(lineChart, {
    type: "line",
    data: {
        labels: {{ navn | tojson }},
        datasets: [{
            label: "Alder",
            data: {{ alder | tojson }}
        }]
    }
});
</script>
```

---

## 3. Kakediagram (pie)

Brukes for å vise andeler av en helhet.

```html
<canvas id="pieChart"></canvas>

<script>
new Chart(pieChart, {
    type: "pie",
    data: {
        labels: {{ navn | tojson }},
        datasets: [{
            data: {{ alder | tojson }}
        }]
    }
});
</script>
```

---

## 4. Donut-diagram (doughnut)

Som kakediagram, men med hull i midten.

```html
<canvas id="donutChart"></canvas>

<script>
new Chart(donutChart, {
    type: "doughnut",
    data: {
        labels: {{ navn | tojson }},
        datasets: [{
            data: {{ alder | tojson }}
        }]
    }
});
</script>
```

---

## 5. Horisontalt søylediagram

Nyttig når etikettene er lange.

```html
<canvas id="horizontalBar"></canvas>

<script>
new Chart(horizontalBar, {
    type: "bar",
    data: {
        labels: {{ navn | tojson }},
        datasets: [{
            label: "Alder",
            data: {{ alder | tojson }}
        }]
    },
    options: {
        indexAxis: "y"
    }
});
</script>
```

---

## 6. Radar-diagram (radar)

Brukes for å sammenligne flere egenskaper.

```html
<canvas id="radarChart"></canvas>

<script>
new Chart(radarChart, {
    type: "radar",
    data: {
        labels: {{ navn | tojson }},
        datasets: [{
            label: "Alder",
            data: {{ alder | tojson }}
        }]
    }
});
</script>
```

---

## 7. Scatter plot (scatter)

Brukes for å vise sammenheng mellom to variabler.

### Flask

```python
punkter = [
    {"x": 1, "y": 35},
    {"x": 2, "y": 37},
    {"x": 3, "y": 45}
]
```

### HTML

```html
<canvas id="scatterChart"></canvas>

<script>
new Chart(scatterChart, {
    type: "scatter",
    data: {
        datasets: [{
            label: "Alder",
            data: {{ punkter | tojson }}
        }]
    }
});
</script>
```

---

## 8. Flere datasett i samme diagram

Brukes for sammenligning av flere dataserier.

```html
<canvas id="multiChart"></canvas>

<script>
new Chart(multiChart, {
    type: "bar",
    data: {
        labels: {{ navn | tojson }},
        datasets: [
            {
                label: "Alder 2024",
                data: {{ alder | tojson }}
            },
            {
                label: "Alder 2025",
                data: [36, 38, 46]
            }
        ]
    }
});
</script>
```

---

## Oppsummering

| Diagramtype      | type-verdi      | Bruksområde         |
| ---------------- | --------------- | ------------------- |
| Søyle            | bar             | Sammenligne verdier |
| Linje            | line            | Utvikling over tid  |
| Kake             | pie             | Andeler             |
| Donut            | doughnut        | Andeler             |
| Horisontal søyle | bar + indexAxis | Lange etiketter     |
| Radar            | radar           | Egenskaper          |
| Scatter          | scatter         | Sammenheng          |

---

## Viktige regler

* Flask brukes til å hente og beregne data
* Jinja brukes til å sende data videre til HTML
* JavaScript lager selve plottet
* Alle lister og ordbøker som brukes i JavaScript må sendes med `|tojson`
