# lucapapale.it

Sito personale di Luca Papale, realizzato con Astro, TypeScript, HTML semantico
e CSS puro.

Il progetto è statico e sarà pubblicato tramite GitHub Pages.

## Comandi

| Comando | Azione |
| --- | --- |
| `npm install` | Installa le dipendenze |
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Genera la build statica in `dist/` |
| `npm run preview` | Avvia l'anteprima della build |

## Struttura principale

- `src/components/`: componenti Astro condivisi
- `src/layouts/`: layout riutilizzabili
- `src/pages/`: pagine e route
- `src/styles/`: design token e stili globali
- `docs/`: architettura, contenuti, roadmap e decisioni

Prima di contribuire, leggere `AGENTS.md` e la documentazione nella cartella
`docs/`.

## Pubblicazione temporanea

Il sito viene compilato e pubblicato automaticamente tramite GitHub Actions a
ogni push sul branch `main`. Il workflow può essere avviato anche manualmente
dalla sezione **Actions** del repository.

Indirizzo temporaneo:
[https://lucapapale81b.github.io/lucapapale.it/](https://lucapapale81b.github.io/lucapapale.it/)

Il dominio personalizzato `lucapapale.it` verrà collegato in una fase
successiva.
