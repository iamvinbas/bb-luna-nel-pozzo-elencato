# La Luna nel Pozzo — versione "elencato"

Sito statico per l'appartamento **La Luna nel Pozzo** (Molfetta, Bari), stessi contenuti del sito originale ([bb-luna-nel-pozzo](https://iamvinbas.github.io/bb-luna-nel-pozzo/)) ma con lo stile visivo "elencato" (card-based, palette calda stone/amber, font Inter) ispirato a [dimorasorrisoguide.netlify.app](https://dimorasorrisoguide.netlify.app/).

## Struttura

```
index.html      contenuto e sezioni
css/style.css   design system (colori, card, tipografia)
js/main.js      menu mobile, lightbox galleria, mappa, form → WhatsApp
images/         foto dell'appartamento e di Molfetta
```

## Sviluppo locale

```bash
python3 -m http.server 8000
```

poi apri `http://localhost:8000`.

## Deploy

Pubblicato con GitHub Pages dal branch `main`, cartella root.
