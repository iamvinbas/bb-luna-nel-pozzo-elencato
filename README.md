# La Luna nel Pozzo — versione "elencato"

Sito statico per l'appartamento **La Luna nel Pozzo** (Molfetta, Bari): contenuti tratti dal sito originale ([bb-luna-nel-pozzo](https://iamvinbas.github.io/bb-luna-nel-pozzo/)), condensati per il cliente finale, con lo stile "elencato" — colonna singola, liste di card con icone — copiato da [dimorasorrisoguide.netlify.app](https://dimorasorrisoguide.netlify.app/) (palette stone/amber, font Inter, card rounded-2xl, righe con icona).

## Struttura

```
index.html      contenuto: welcome card, appartamento, dotazioni, galleria, dove siamo, prenota
css/style.css   design system (colori, card, liste)
js/main.js      lightbox mini-galleria
images/         foto essenziali (hero + 4 galleria)
```

## Sviluppo locale

```bash
python3 -m http.server 8000
```

poi apri `http://localhost:8000`.

## Deploy

Pubblicato con GitHub Pages dal branch `main`, cartella root.
