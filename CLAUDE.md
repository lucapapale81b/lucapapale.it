# Istruzioni per gli assistenti di coding

## Prima di modificare il progetto

- Leggere sempre `docs/ARCHITECTURE.md`, `docs/ROADMAP.md` e `docs/CONTENT.md`.
- Non inventare informazioni personali, professionali o contenuti di viaggio.
- Aggiornare la documentazione quando cambiano decisioni architetturali o roadmap.

## Vincoli tecnici

- Mantenere il sito statico.
- Non introdurre dipendenze senza una reale necessità.
- Non aggiungere React, Vue, Angular, Tailwind, backend o database senza esplicita richiesta.
- Preferire HTML semantico e CSS semplice.
- Usare JavaScript soltanto quando strettamente necessario.
- Mantenere accessibilità, responsive design, SEO e prestazioni.
- Evitare astrazioni premature e componenti generici non necessari.

## Verifica

- Eseguire `npm run build` dopo modifiche significative.

## Server di sviluppo

Avviare il server in background:

```sh
astro dev --background
```

Gestirlo con `astro dev stop`, `astro dev status` e `astro dev logs`.

## Documentazione Astro

Documentazione completa: <https://docs.astro.build>

Consultare le guide pertinenti prima di lavorare sulle relative aree:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Componenti Astro](https://docs.astro.build/en/basics/astro-components/)
- [Framework UI](https://docs.astro.build/en/guides/framework-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Stili](https://docs.astro.build/en/guides/styling/)
- [Internazionalizzazione](https://docs.astro.build/en/guides/internationalization/)
