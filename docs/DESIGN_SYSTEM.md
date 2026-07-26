# Design System

## Filosofia

Il design di `lucapapale.it` deve raccontare una persona attraverso due dimensioni complementari: la precisione professionale e la curiosità verso il mondo. L'interfaccia è moderna, minimale e ordinata, ma non fredda o impersonale.

Ogni scelta deve favorire contenuto, leggibilità e riconoscibilità. Il sito non deve assumere l'aspetto di un template, di un prodotto corporate o di un CV trasposto sul web. Fotografie, ritmo editoriale e piccoli accenti cromatici legati al viaggio daranno personalità senza appesantire l'esperienza.

Principi guida:

- gerarchia chiara prima della decorazione;
- spazio bianco come strumento di ordine;
- dettagli caldi e misurati;
- componenti semplici, coerenti e legati a esigenze reali;
- animazioni discrete e mai indispensabili alla comprensione.

I token sono definiti in `src/styles/variables.css`; le regole condivise e le utility essenziali si trovano in `src/styles/global.css`.

## Palette

| Ruolo | Token principale | Colore | Motivazione |
| --- | --- | --- | --- |
| Sfondo | `--color-paper` | `#FFFDF8` | Un avorio appena caldo, più personale del bianco puro |
| Superficie | `--color-surface` | `#FFFFFF` | Distingue card e contenuti senza introdurre rumore |
| Testo | `--color-ink-950` | `#17212B` | Un quasi nero morbido, autorevole e leggibile |
| Testo secondario | `--color-ink-600` | `#586572` | Crea gerarchia mantenendo un buon contrasto |
| Primario | `--color-ocean-700` | `#145F63` | Il blu petrolio comunica affidabilità e richiama viaggio e scoperta |
| Accento | `--color-terracotta-600` | `#B34F32` | La terracotta aggiunge calore e un richiamo geografico |
| Fondo alternativo | `--color-sand-100` | `#F5F0E7` | Evoca carta e mappe senza diventare tematico |

I colori primario e accento non devono competere: il blu petrolio guida azioni e link, la terracotta evidenzia dettagli, etichette e stati selezionati. Il colore non deve essere l'unico mezzo per comunicare uno stato.

## Tipografia

La prima versione usa esclusivamente font di sistema, evitando download e dipendenze:

- **sans-serif** per corpo, navigazione, controlli e metadati;
- **serif** per i titoli, così da introdurre un tono editoriale e personale.

La scala tipografica usa valori fluidi con `clamp()` per i titoli e dimensioni stabili per il testo. Il corpo mantiene un'interlinea ampia; i titoli hanno ritmo compatto e righe bilanciate. I paragrafi editoriali dovrebbero rimanere entro `--content-narrow`.

Maiuscolo e spaziatura larga sono riservati a etichette brevi, come la classe `.eyebrow`, e non a testi estesi.

## Spaziature

La scala parte da `0.25rem` e cresce fino a `6rem`. Va preferito il token semanticamente più vicino, evitando valori isolati.

- `--space-1`–`--space-4`: distanze interne e tra elementi piccoli;
- `--space-5`–`--space-7`: gruppi, card e blocchi di contenuto;
- `--space-8`–`--space-9`: separazioni ampie;
- `--space-section`: ritmo verticale fluido delle sezioni;
- `--space-gutter`: margine laterale fluido della pagina.

La prossimità deve riflettere la relazione tra contenuti: elementi dello stesso gruppo sono più vicini rispetto ai gruppi adiacenti.

## Pulsanti

I pulsanti devono avere un'etichetta esplicita, un'altezza minima di 44 px e un focus sempre visibile.

- **Primario:** fondo blu petrolio, testo bianco, bordo dello stesso colore.
- **Secondario:** fondo trasparente, testo e bordo blu petrolio.
- **Testuale:** aspetto simile a un link, per azioni a bassa priorità.

Usare `--radius-md`, peso semibold e spaziatura orizzontale generosa. Hover e active devono essere sobri; non usare trasformazioni vistose. Un elemento `<a>` va presentato come pulsante soltanto quando conduce a una destinazione, mentre un `<button>` è riservato alle azioni.

## Card

Le card organizzano contenuti correlati, non decorano ogni blocco. Lo stile base prevede:

- superficie bianca;
- bordo sottile `--color-border`;
- `--radius-lg`;
- ombra assente o `--shadow-sm`;
- spaziatura interna coerente;
- gerarchia composta da media, metadati, titolo, testo e azione.

L'intera card può essere cliccabile solo con una struttura accessibile e un focus chiaro. Le ombre più marcate sono riservate a sovrapposizioni reali, non allo stato predefinito.

## Responsive

Il sistema è mobile-first. Il layout base deve funzionare senza media query; gli adattamenti si aggiungono soltanto quando il contenuto richiede più spazio.

Breakpoints di riferimento:

| Nome | Valore | Uso indicativo |
| --- | --- | --- |
| `sm` | `30rem` / 480 px | Piccoli adattamenti di controlli e card |
| `md` | `48rem` / 768 px | Layout a due colonne e navigazione estesa |
| `lg` | `64rem` / 1024 px | Composizioni editoriali più ampie |
| `xl` | `80rem` / 1280 px | Contenuti wide e immagini panoramiche |

I valori sono registrati come custom properties per documentazione, ma nelle condizioni `@media` vanno scritti esplicitamente perché CSS non consente `var()` nelle media query. I breakpoint non devono essere scelti in base a dispositivi specifici, ma nel punto in cui il contenuto perde leggibilità.

Immagini e video sono fluidi. Dimensioni intrinseche e `aspect-ratio` vanno dichiarati quando possibile per evitare spostamenti di layout.

## Accessibilità

- Usare HTML semantico e una gerarchia corretta dei titoli.
- Garantire contrasto sufficiente per testo, controlli e stati interattivi.
- Conservare un indicatore `:focus-visible` evidente.
- Assicurare aree interattive di almeno 44 × 44 px quando possibile.
- Non affidare informazioni soltanto a colore, posizione o movimento.
- Fornire testi alternativi utili alle immagini informative e `alt=""` a quelle decorative.
- Rispettare `prefers-reduced-motion`.
- Mantenere ordine del DOM e ordine visivo coerenti.
- Verificare il sito con tastiera, zoom al 200% e strumenti automatici.
- Usare `.visually-hidden` solo per informazioni necessarie alle tecnologie assistive.

## Linee guida dei componenti

Queste indicazioni guidano l'implementazione futura; non definiscono ancora un'API astratta.

### Header

- Usare `<header>` e `<nav aria-label="Navigazione principale">`.
- Mostrare identità personale e poche destinazioni principali.
- Evidenziare la pagina corrente con `aria-current="page"` oltre allo stile visivo.
- Su mobile privilegiare una struttura semplice; introdurre un menu interattivo solo se necessario.
- Se sticky, usare `--z-header` e assicurare leggibilità sul contenuto sottostante.

### Footer

- Usare `<footer>` con contatti essenziali, link esterni e informazioni di copyright.
- Mantenere un tono personale e una struttura più quieta rispetto all'header.
- Distinguere chiaramente i link esterni e fornire nomi accessibili alle icone.

### Button

- Rendere esplicite le varianti primaria, secondaria e testuale.
- Supportare contenuto testuale e, solo se utile, un'icona.
- Prevedere stati hover, focus-visible, active e disabled.
- Non usare pulsanti disabilitati senza spiegare il motivo nel contesto.

### Card

- Usare l'elemento semantico più adatto, spesso `<article>`.
- Conservare ordine e gerarchia dei contenuti.
- Evitare annidamenti di più controlli interattivi dentro un unico link esteso.
- Applicare bordi e ombre con moderazione.

### Section

- Usare `<section>` soltanto quando il blocco ha un titolo identificabile.
- Comporre `.section` con una classe container, senza duplicare padding laterali.
- Alternare lo sfondo solo per sostenere la scansione della pagina.
- Limitare la larghezza dei testi lunghi con `.container--narrow`.

### Hero

- Comunicare identità e scopo della pagina con un solo `h1`.
- Abbinare titolo, breve introduzione e non più di due azioni prioritarie.
- Evitare slogan corporate, statistiche decorative e altezza forzata a tutto schermo.
- Integrare eventuali immagini come parte del racconto personale, con crop stabile e testo alternativo appropriato.

### TravelCard

- Usare `<article>` e presentare foto, destinazione, periodo e una sintesi verificata.
- Dare priorità all'immagine senza compromettere la leggibilità del titolo.
- Usare la terracotta per piccoli dettagli editoriali, non per ampie superfici.
- Mantenere coerente il rapporto d'aspetto delle copertine.
- Non inventare luoghi, date, valutazioni o itinerari mancanti.

### ExperienceCard

- Usare `<article>` o una voce di elenco all'interno di una sezione esperienze.
- Evidenziare ruolo, organizzazione e periodo con una gerarchia testuale chiara.
- Preferire elenchi brevi per responsabilità e risultati.
- Non trasformare ogni competenza in badge decorativi.
- Non inventare aziende, ruoli, date o risultati professionali.
