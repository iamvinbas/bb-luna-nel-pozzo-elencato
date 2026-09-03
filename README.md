# La Luna nel Pozzo — versione "elencato"

Sito statico per l'appartamento **La Luna nel Pozzo** (Molfetta, Bari): contenuti tratti dal sito originale ([bb-luna-nel-pozzo](https://iamvinbas.github.io/bb-luna-nel-pozzo/)), condensati per il cliente finale, con lo stile "elencato": colonna singola, palette stone/amber, font Inter, e un **menu a tendine** (accordion nativo `<details>/<summary>`, chevron che ruota all'apertura) con le voci Appartamento, Comfort, Galleria, Dove siamo, Prenota.

## Struttura

```
index.html      welcome card + accordion a tendine con le 5 voci
css/style.css   design system (colori, card, accordion, liste)
js/main.js      apertura automatica della voce da link #ancora, lightbox mini-galleria
images/         foto essenziali (hero + 4 galleria)
```

## Sviluppo locale

```bash
python3 -m http.server 8000
```

poi apri `http://localhost:8000`.

## Deploy

Pubblicato con GitHub Pages dal branch `main`, cartella root.
