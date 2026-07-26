# Decision Log

Questo documento registra le decisioni architetturali e progettuali rilevanti per `lucapapale.it`. Lo scopo è conservarne il contesto, le motivazioni, le alternative considerate e le conseguenze, così da rendere comprensibile nel tempo l'evoluzione del progetto.

# DECISION-001

Data:  
2026-07-26

Titolo:  
Utilizzare Astro come framework del progetto.

Stato:  
✅ Accettata

## Decisione

Utilizzare Astro con TypeScript per sviluppare il sito.

## Motivazione

- Sito prevalentemente statico
- Semplicità
- SEO
- Prestazioni
- Hosting gratuito su GitHub Pages

## Alternative valutate

- Angular
- Next.js

## Conseguenze

- Il sito può essere generato come insieme di risorse statiche.
- JavaScript lato client viene incluso soltanto quando necessario.
- Lo sviluppo segue convenzioni e strumenti dell'ecosistema Astro.

---

# DECISION-002

Data:  
2026-07-26

Titolo:  
Hosting tramite GitHub Pages.

Stato:  
✅ Accettata

## Decisione

Pubblicare la prima versione del sito tramite GitHub Pages.

## Motivazione

- Costo nullo
- Semplicità
- Sufficiente per la prima versione

## Alternative valutate

- VPS
- Hosting Aruba

## Conseguenze

- Il sito deve rimanere compatibile con un hosting statico.
- Il deployment sarà automatizzato tramite GitHub Actions.
- Il dominio gestito su Aruba dovrà essere configurato per puntare a GitHub Pages.

---

# DECISION-003

Data:  
2026-07-26

Titolo:  
Nessun backend nella versione iniziale.

Stato:  
✅ Accettata

## Decisione

Realizzare la prima versione senza servizi backend, database o autenticazione.

## Motivazione

- Nessuna funzionalità dinamica necessaria
- Riduzione della complessità
- Possibilità di aggiungerlo in futuro

## Alternative valutate

- Spring Boot

## Conseguenze

- I contenuti saranno gestiti nel repository e generati staticamente.
- Le funzionalità che richiedono elaborazione server non saranno incluse nella prima versione.
- Un backend verrà valutato soltanto in presenza di una necessità concreta.

---

# DECISION-004

Data:  
2026-07-26

Titolo:  
Il sito rappresenta una persona e non un semplice portfolio.

Stato:  
✅ Accettata

## Decisione

Organizzare identità e contenuti attorno a due anime principali:

- professione;
- passioni, con particolare attenzione ai viaggi.

## Motivazione

Il sito deve raccontare la persona in modo più completo rispetto a un portfolio professionale o a un CV online.

## Alternative valutate

- Portfolio esclusivamente professionale
- CV online

## Conseguenze

- Architettura dei contenuti e navigazione devono dare spazio sia alla professione sia alle passioni.
- Il tono visivo ed editoriale deve essere personale, senza assumere un'impostazione corporate.
- La sezione viaggi sarà il primo approfondimento dell'area dedicata alle passioni.

---

# DECISION-005

Data:  
2026-07-26

Titolo:  
Utilizzare CSS puro.

Stato:  
✅ Accettata

## Decisione

Utilizzare CSS puro e CSS custom properties per stili e Design System.

## Motivazione

- Semplicità
- Controllo completo
- Meno dipendenze

## Alternative valutate

- Tailwind
- Bootstrap

## Conseguenze

- Gli stili condivisi e i design token sono mantenuti direttamente nel progetto.
- Non viene introdotta una libreria UI o un framework CSS.
- Coerenza, naming e manutenzione del CSS sono responsabilità del progetto.

---
