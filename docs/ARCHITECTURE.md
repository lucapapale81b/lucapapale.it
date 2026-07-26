# Architettura

## Visione

`lucapapale.it` è un sito personale, non soltanto un CV online. I contenuti sono organizzati in due aree principali:

- **Professione**, dedicata al profilo lavorativo, alle esperienze, alle competenze e ai progetti.
- **Passioni**, inizialmente concentrata soprattutto sui viaggi.

## Stack e contenuti

- Astro
- TypeScript
- HTML semantico
- CSS puro
- Markdown e Astro Content Collections per i contenuti strutturati, come i viaggi

Il sito è statico e non prevede:

- backend;
- database;
- autenticazione;
- framework frontend aggiuntivi come React, Vue o Angular;
- Tailwind nella prima versione.

JavaScript sarà usato soltanto quando strettamente necessario. Vanno evitate astrazioni premature e componenti generici privi di una necessità concreta.

## Esperienza e qualità

Lo sviluppo segue un approccio mobile-first, con particolare attenzione a:

- accessibilità;
- SEO;
- prestazioni;
- responsive design;
- immagini ottimizzate in WebP o AVIF, quando possibile.

## Pagine e URL

URL iniziali:

- `/`
- `/lavoro`
- `/viaggi`
- `/contatti`

Possibili URL futuri:

- `/progetti`
- `/hobby`
- `/articoli`
- `/viaggi/[slug]`

## Componenti iniziali

I componenti indicativi della prima versione sono:

- `Header`
- `Footer`
- `Hero`
- `TravelCard`
- `ExperienceItem`
- `SocialLinks`

L'elenco potrà evolvere in base a esigenze reali, senza introdurre astrazioni premature.

## Struttura indicativa

```text
src/
  components/
  layouts/
  pages/
  content/
  styles/
  assets/

public/
  images/

docs/
```

## Hosting e dominio

- Hosting gratuito tramite GitHub Pages.
- Deployment automatico tramite GitHub Actions.
- Dominio: [https://lucapapale.it](https://lucapapale.it), acquistato e gestito tramite Aruba.

## Flusso Git

- Il branch principale è `main`.
- Per modifiche più grandi potranno essere creati branch `feature/*`.
- Convenzione suggerita per i commit:
  - `feat:`
  - `fix:`
  - `docs:`
  - `refactor:`
  - `chore:`
