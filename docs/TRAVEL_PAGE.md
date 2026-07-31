# Pagina Viaggi

## Obiettivo editoriale

La pagina `/viaggi` racconta il modo in cui Luca vive i viaggi: non soltanto le
destinazioni, ma ciò che ogni esperienza gli ha lasciato. Deve essere personale,
contemplativa e visiva, senza assumere la forma di un blog, una guida turistica,
una galleria fotografica o un diario cronologico.

La pagina ha due livelli di lettura:

1. una panoramica capace di comunicare il rapporto di Luca con il viaggio;
2. approfondimenti dedicati ai viaggi più importanti.

Le fotografie hanno un ruolo narrativo. Non devono diventare una decorazione
continua o sostituire il contenuto testuale. Date, luoghi, itinerari, consigli e
valutazioni saranno pubblicati soltanto quando verificati.

## Principi di progettazione

- Mantenere palette, tipografia, spaziature e focus definiti dal Design System.
- Alternare superfici chiare con discrezione, seguendo il ritmo di Home e
  Lavoro.
- Usare un solo `h1` e un `h2` identificabile per ogni sezione principale.
- Conservare l'ordine del DOM anche nell'impaginazione desktop.
- Evitare caroselli, animazioni, effetti parallasse, overlay pesanti e
  interazioni indispensabili alla comprensione.
- Ottimizzare le fotografie con Astro, dimensioni intrinseche, `srcset`,
  `sizes`, WebP o AVIF e lazy loading fuori dalla prima viewport.
- Mantenere l'esperienza principale utilizzabile senza JavaScript client.

## Architettura delle informazioni

Ordine previsto per `/viaggi`:

1. Hero
2. Statistiche
3. Mappa del mondo
4. Grandi viaggi
5. Capitali preferite
6. Altri viaggi
7. Galleria fotografica
8. Prossime destinazioni
9. Footer della pagina
10. Footer globale del sito, fornito da `BaseLayout`

L'ordine parte dall'identità personale, passa a una visione geografica generale,
approfondisce le esperienze più significative e termina con uno sguardo al
futuro.

## 1. Hero

### Scopo

Presentare il rapporto personale di Luca con il viaggio e chiarire che la pagina
non è un elenco di destinazioni.

### Contenuti

- `h1`: “Viaggi” oppure “I miei viaggi”; la scelta finale va mantenuta coerente
  con navigazione e metadati.
- Un testo introduttivo breve, scritto in prima persona.
- Una fotografia principale autentica e significativa.
- Nessuna call to action commerciale.

Il testo deve esprimere curiosità, uscita dalla routine, scoperta e ciò che si
impara tornando da un viaggio. La versione definitiva va approvata come
contenuto personale.

### Struttura

Composizione editoriale a due colonne: testo a sinistra e fotografia a destra.
La fotografia non è inserita in una card e non riceve filtri, gradienti o
overlay.

### Componenti

- `TravelHero.astro`
- riuso di `BaseLayout`

Il componente Hero della Home non va reso generico solo per questa pagina: un
componente dedicato evita props e varianti non necessarie.

### Responsive

- Mobile: testo, poi fotografia.
- Tablet: una colonna ampia oppure due colonne solo se il contenuto mantiene
  una buona leggibilità.
- Desktop: due colonne bilanciate.

## 2. Statistiche

### Scopo

Offrire una sintesi immediata senza trasformare la pagina in una dashboard.

### Contenuti

La prima versione può includere:

- Paesi visitati;
- continenti;
- città visitate, espresse come valore editoriale non puntuale (`60+`);
- viaggio portato più nel cuore.

I valori devono provenire da dati verificati. I conteggi oggettivi vanno
calcolati dai contenuti quando possibile; le preferenze restano valori
editoriali espliciti.

### Struttura

Un elenco descrittivo `<dl>` con quattro coppie `dt`/`dd`, separato da linee
sottili. I numeri non devono avere dimensioni da dashboard.

### Componenti

- `TravelStats.astro`

Props previste:

- `countries`;
- `continents`;
- `visitedCities`;
- `mostMeaningfulTrip`.

### Responsive

- Mobile: una colonna.
- Tablet: due colonne.
- Desktop: quattro colonne.

## 3. Mappa del mondo

### Scopo

Mostrare la dimensione geografica dei viaggi e offrire un accesso alternativo ai
contenuti per Paese.

### Contenuti

- Paesi visitati evidenziati;
- Paesi con contenuti pubblicati collegati alla relativa pagina o sezione;
- legenda testuale;
- elenco testuale equivalente dei Paesi visitati.

La mappa non deve mostrare rotte inventate né suggerire che tutti i Paesi
evidenziati abbiano già una pagina dedicata.

La mappa evidenzia tutti i Paesi e le destinazioni visitati presenti nella
sorgente dati verificata. Gibilterra rimane visibile come destinazione, ma non
contribuisce al conteggio degli Stati visitati. I collegamenti sono presenti
soltanto per i viaggi che dispongono di una pagina pubblicata.

### Provenienza della mappa

La geometria geografica usa
[`BlankMap-World.svg`](https://commons.wikimedia.org/wiki/File:BlankMap-World.svg),
una mappa mondiale in proiezione Robinson pubblicata su Wikimedia Commons e
rilasciata nel pubblico dominio dal titolare dei diritti. Non è richiesta
attribuzione.

L'asset è conservato localmente in `src/assets/maps/world.svg`. La geometria e
gli identificatori ISO alpha-2 originali dei Paesi non vengono modificati. In
fase di build vengono rimosse le dimensioni rigide e la presentazione originale
viene sovrascritta con i token del Design System. I Paesi visitati sono
evidenziati dinamicamente attraverso gli identificatori ISO già presenti
nell'asset, senza modificare le geometrie.

### Funzionamento

La prima versione è una mappa SVG statica e accessibile:

- ogni Paese visitato è un elemento identificabile;
- un Paese diventa cliccabile soltanto quando esiste una destinazione reale;
- i Paesi cliccabili sono link nativi e raggiungibili da tastiera;
- hover e focus mostrano lo stesso stato visivo;
- il focus è evidente e non comunica soltanto tramite il colore;
- il nome del Paese è disponibile alle tecnologie assistive;
- un elenco HTML sotto la mappa offre gli stessi collegamenti e costituisce
  anche il fallback su schermi piccoli.

Per un Paese con più viaggi, il link conduce inizialmente alla sezione filtrata
o all'archivio del Paese. Il singolo viaggio mantiene una propria route.

### Componenti

- `TravelMap.astro`
- `VisitedCountryList.astro`

La geometria SVG resta isolata in `TravelMap`. L'elenco e i dati geografici non
vanno duplicati nel markup: entrambi ricevono la stessa sorgente dati.

Non è prevista una libreria cartografica nella prima versione. Una dipendenza
andrà valutata soltanto se emergeranno requisiti reali impossibili da soddisfare
con SVG e HTML statici.

### Responsive

- Mobile: elenco testuale prima o immediatamente dopo una mappa semplificata,
  senza zoom o trascinamento obbligatori.
- Tablet e desktop: mappa a tutta larghezza entro `container--wide`, legenda ed
  elenco affiancati quando lo spazio lo consente.
- Nessuno scorrimento orizzontale della pagina.

## 4. Grandi viaggi

### Scopo

Presentare le esperienze che hanno lasciato il segno più profondo e indirizzare
verso pagine narrative dedicate.

### Contenuti

La struttura iniziale prevede:

- Argentina;
- Islanda;
- Canada.

Per ogni voce:

- fotografia di copertina;
- destinazione;
- sottotitolo;
- sintesi personale;
- eventuale periodo, soltanto se verificato;
- link descrittivo alla pagina di dettaglio.

### Struttura

Tre blocchi editoriali ampi. Non devono sembrare prodotti o pacchetti turistici.
La fotografia precede titolo e testo; l'intera card non deve contenere controlli
interattivi concorrenti.

Route previste:

- `/viaggi/argentina`;
- `/viaggi/islanda`;
- `/viaggi/canada`.

### Componenti

- riuso ed evoluzione controllata di `TravelCard.astro`;
- eventuale `FeaturedTravels.astro` per titolo, introduzione e griglia.

`TravelCard` deve ricevere dati reali e supportare immagine, alt, titolo,
sottotitolo, descrizione e URL. La variante della Home può riusare lo stesso
markup; eventuali differenze devono essere limitate alla composizione esterna,
non a numerose varianti visive interne.

### Responsive

- Mobile: una colonna.
- Tablet: due colonne, con la terza voce su una nuova riga.
- Desktop: tre colonne oppure una composizione editoriale asimmetrica soltanto
  se migliora la gerarchia senza cambiare l'ordine del DOM.

## 5. Capitali preferite

### Scopo

Raccontare il rapporto con alcune città senza confonderle con i grandi viaggi o
attribuire loro la stessa profondità narrativa.

### Contenuti

- Londra;
- Berlino;
- Praga;
- Edimburgo.

Ogni città prevede:

- nome;
- una fotografia, se disponibile;
- una breve nota personale verificata;
- eventuale link futuro a un approfondimento.

Nella prima versione Berlino e Praga utilizzano fotografie personali; Londra
ed Edimburgo mantengono un placeholder esplicito finché non saranno disponibili
immagini appropriate.

### Struttura

Una lista editoriale compatta, separata dai Grandi viaggi. I blocchi hanno meno
peso visivo: immagine più piccola, titolo e poche righe, senza statistiche o
classifiche.

### Componenti

- `FavoriteCities.astro`
- `CityPreview.astro`, soltanto se il markup viene effettivamente ripetuto

Non riusare `TravelCard`: città preferite e grandi viaggi hanno gerarchie e
significati diversi.

### Responsive

- Mobile: lista verticale.
- Tablet e desktop: griglia a due colonne.
- Evitare quattro card piccole allineate come una dashboard.

## 6. Altri viaggi

### Scopo

Rendere visibili le altre esperienze senza attribuire a tutte la profondità dei
Grandi viaggi.

### Contenuti

Per ogni viaggio:

- destinazione;
- anno o periodo, se verificato;
- breve contesto;
- fotografia facoltativa;
- link soltanto quando esiste un approfondimento.

L'elenco definitivo sarà costruito esclusivamente con dati confermati. I
contenuti già citati in `CONTENT.md` costituiscono una base da verificare, non
un'autorizzazione a inventare itinerari o dettagli.

### Struttura

Elenco ordinato per rilevanza editoriale, non necessariamente per data. Ogni
voce è separata da una linea sottile e mantiene una gerarchia semplice.

### Componenti

- `OtherTravels.astro`
- `TravelListItem.astro` soltanto quando più voci reali giustificano il
  componente

### Responsive

- Mobile: contenuto lineare.
- Desktop: destinazione e periodo in una colonna breve, sintesi nella colonna
  principale.

## 7. Galleria fotografica

### Scopo

Mostrare lo sguardo di Luca sui luoghi visitati senza trasformare l'intera
pagina in una galleria.

### Contenuti

Una selezione breve e curata, indicativamente da sei a nove fotografie, ognuna
con:

- immagine ottimizzata;
- alt descrittivo;
- luogo e viaggio di appartenenza;
- didascalia soltanto quando aggiunge contesto.

La prima selezione comprende i tre grandi viaggi e uno scatto urbano per
Amburgo, Copenaghen e Malmö, mantenendo un equilibrio tra natura e città.

### Struttura

Griglia fotografica sobria con rapporti d'aspetto dichiarati. Il crop può
uniformare l'anteprima, ma la pagina di dettaglio deve poter valorizzare
l'immagine completa.

La prima versione non prevede carosello o lightbox. Una fotografia può essere
un link alla pagina del viaggio corrispondente.

### Componenti

- `TravelGallery.astro`
- `TravelPhoto.astro` solo se necessario per didascalie e collegamenti

### Responsive

- Mobile: una colonna o due colonne soltanto per immagini leggibili anche in
  formato piccolo.
- Tablet: due colonne.
- Desktop: tre colonne.
- Il caricamento mantiene dimensioni intrinseche per evitare layout shift.

## 8. Prossime destinazioni

### Scopo

Chiudere il racconto con curiosità verso ciò che verrà, senza presentare piani
incerti come viaggi confermati.

### Contenuti

- destinazioni future realmente confermate;
- destinazioni desiderate, marcate chiaramente come idee;
- una breve nota personale sul perché incuriosiscono Luca.

I due stati, “in programma” e “mi piacerebbe”, non devono essere confusi.

### Struttura

Una sezione breve, prevalentemente testuale. Nessun conto alla rovescia,
prenotazione, itinerario simulato o fotografia stock.

### Componenti

- `NextDestinations.astro`

### Responsive

Lista lineare su mobile; al massimo due colonne su desktop.

## 9. Footer della pagina

### Scopo

Concludere la pagina collegando il viaggio alle altre dimensioni personali e
offrendo un'uscita naturale.

### Contenuti

- una breve frase conclusiva;
- collegamento alla Home;
- collegamento alla pagina Lavoro;
- eventuale invito al contatto quando la pagina Contatti sarà disponibile.

### Struttura

Un blocco editoriale con uno o due link testuali. Non sostituisce e non duplica
il Footer globale incluso da `BaseLayout`.

### Componenti

- `TravelPageFooter.astro` solo se il blocco avrà contenuto sufficiente;
- riuso dei link e degli stati focus globali.

### Responsive

Testo e link impilati su mobile, affiancati su desktop quando la lettura resta
naturale.

## Pagine dedicate ai grandi viaggi

### Routing

Le pagine usano una route dinamica statica:

```text
src/pages/viaggi/[slug].astro
```

Astro genera le route in fase di build a partire dalla Content Collection
`travels`. La route deve restituire 404 per slug non presenti e non deve
dipendere da un backend.

### Struttura comune

#### 1. Hero

- `h1` con nome del viaggio;
- sottotitolo personale;
- fotografia principale;
- periodo, se verificato;
- breadcrumb essenziale verso `/viaggi`.

#### 2. Informazioni principali

Un `<dl>` con soli dati disponibili, per esempio periodo, Paese, durata e tipo
di viaggio. I campi mancanti non mostrano placeholder.

#### 3. Mappa

Mappa statica del Paese o dell'area con le tappe confermate. Deve avere un elenco
testuale equivalente. Non è necessario introdurre una mappa interattiva nella
prima versione.

#### 4. Itinerario

Sequenza delle tappe nell'ordine reale del viaggio. È una lista narrativa, non
una timeline decorativa. Ogni tappa può includere luogo, breve nota e fotografia
soltanto quando disponibili.

#### 5. Fotografie

Selezione curata per raccontare i passaggi principali. Le immagini hanno alt
specifici, didascalie utili e formati ottimizzati.

#### 6. Consigli

Indicazioni personali basate sull'esperienza reale: cosa rifare, cosa
organizzare diversamente e cosa sapere prima di partire. Non devono sembrare una
guida esaustiva o sostituire fonti ufficiali.

#### 7. Box personale

Un breve blocco distinto dal testo operativo. Può raccogliere un momento, una
sensazione o un dettaglio particolarmente significativo. Non usa citazioni
inventate.

#### 8. “Cosa mi porto a casa”

La parte centrale dell'identità editoriale: uno o due paragrafi su ciò che il
viaggio ha lasciato a Luca. Deve essere contenuto originale e approvato, non
generato a partire dalla sola destinazione.

#### 9. Conclusione

Breve chiusura e collegamenti al viaggio precedente o successivo secondo
l'ordine editoriale, oltre al ritorno alla pagina `/viaggi`.

### Componenti condivisi

- `TravelDetailHero.astro`
- `TravelFacts.astro`
- `TravelRouteMap.astro`
- `TravelItinerary.astro`
- `TravelGallery.astro`
- `TravelAdvice.astro`
- `PersonalNote.astro`
- `TravelReflection.astro`
- `TravelNavigation.astro`

I componenti vanno creati soltanto quando la prima pagina reale permette di
validarne il markup. Prima di allora, questa lista descrive responsabilità, non
impone astrazioni premature.

### Responsive

- La lettura base è una singola colonna.
- Su desktop informazioni brevi e contenuto principale possono essere
  affiancati.
- Itinerario, riflessione e consigli mantengono una larghezza di lettura
  contenuta.
- Fotografie e mappe possono usare `container--wide`.
- L'ordine visivo non deve divergere dall'ordine del DOM.

## Modello dei contenuti

La fonte prevista è una Astro Content Collection `travels`, con un file Markdown
o MDX per ogni viaggio. I campi minimi proposti sono:

```text
title
slug
country
countryCode
continent
featured
summary
subtitle
cover
coverAlt
published
```

Campi opzionali, da valorizzare soltanto con informazioni verificate:

```text
startDate
endDate
year
duration
locations
coordinates
gallery
advice
personalNote
reflection
nextTrip
previousTrip
```

Vincoli:

- `slug`, `title`, `country`, `summary`, `cover` e `coverAlt` sono obbligatori
  per una pagina pubblicata;
- `published: false` esclude una bozza dalla generazione pubblica;
- `featured` determina i Grandi viaggi senza duplicarne i dati;
- Paesi e continenti usano valori coerenti, così statistiche e mappa possono
  essere derivati;
- preferenze personali, capitali e prossime destinazioni restano in una
  configurazione editoriale separata quando non rappresentano un viaggio.

## SEO e metadati

### Pagina principale

- title specifico, ad esempio `Viaggi | Luca Papale`;
- description personale e non turistica;
- canonical generato da `BaseLayout`;
- Open Graph di base tramite `BaseLayout`;
- eventuale immagine sociale dedicata soltanto quando disponibile.

### Pagina di dettaglio

- title nel formato `{Viaggio} | Viaggi | Luca Papale`;
- description derivata da una sintesi approvata;
- canonical coerente con `/viaggi/{slug}`;
- Open Graph con fotografia di copertina e alt;
- un solo `h1`;
- breadcrumb semantico.

## Accessibilità

- Tutte le sezioni hanno un titolo associato.
- Mappa e contenuto fotografico dispongono di alternative testuali.
- Paesi cliccabili e link delle card sono raggiungibili da tastiera.
- Focus, hover e stato corrente sono distinguibili.
- Le bandiere sono decorative quando il nome del Paese è già presente.
- Le statistiche sono comprensibili anche senza disposizione a griglia.
- Didascalie e alt hanno funzioni diverse: l'alt descrive l'immagine, la
  didascalia aggiunge contesto.
- Zoom al 200% non produce sovrapposizioni o scorrimento orizzontale.
- Nessuna informazione dipende soltanto da colore, posizione o fotografia.

## Prestazioni

- La fotografia della Hero può essere caricata con priorità alta.
- Tutte le altre immagini usano lazy loading.
- Le copertine dichiarano `width`, `height`, `sizes` e rapporti d'aspetto.
- Le immagini originali restano in `src/assets`; Astro genera i formati
  ottimizzati.
- La mappa SVG deve essere semplificata e priva di metadati inutili.
- Nessuna libreria cartografica o fotografica viene inclusa nella prima
  versione.

## Idee future, non incluse nella prima versione

### Filtri

Filtri per continente, Paese, tipologia o stato del contenuto. Devono aggiornare
anche un riepilogo testuale e mantenere uno stato accessibile.

### Ricerca

Ricerca locale per destinazione e luogo. Va introdotta soltanto quando il numero
di contenuti rende insufficiente la navigazione editoriale.

### Categorie

Categorie editoriali come natura, città o trekking, definite sui contenuti
reali e non create in anticipo.

Queste funzionalità non devono influenzare il markup della prima versione oltre
alla coerenza del modello dati. Non sono previsti backend, account o
personalizzazione.

## Sequenza futura di implementazione

1. Verificare testi, statistiche, Paesi visitati e fotografie disponibili.
2. Definire lo schema della Content Collection sui primi contenuti reali.
3. Implementare Hero e statistiche.
4. Implementare Grandi viaggi e riuso di `TravelCard`.
5. Creare la prima pagina di dettaglio e validare i componenti comuni.
6. Aggiungere mappa e fallback testuale.
7. Aggiungere capitali, altri viaggi, galleria e prossime destinazioni.
8. Verificare accessibilità, responsive, SEO e prestazioni.

Fino alla verifica dei contenuti, nomi, date, itinerari e riflessioni non
presenti nella documentazione restano intenzionalmente non definiti.
