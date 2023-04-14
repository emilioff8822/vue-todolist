step

-All'interno del tag <body>, aggiungere un elemento <div> con l'ID "app" per montare l'applicazione Vue.
-Nel tag <div id="app">, aggiungere un campo di input e un bottone per l'aggiunta di nuovi task. Utilizzare le direttive Vue v-model e @click per gestire l'input dell'utente e l'evento click.
-Visualizzare un messaggio d'errore quando necessario, usando la direttiva v-if per mostrarlo solo quando è presente.
-Creare un elenco <ul> per visualizzare i task e utilizzare la direttiva v-for per ciclare sull'array tasks.
-All'interno di ogni elemento <li>, aggiungere un <span> per il testo del task e utilizzare la direttiva :class per applicare la classe done solo quando il task è completato.
-Aggiungere un bottone "delete" per ogni task e utilizzare la direttiva @click.stop per rimuovere il task dall'array tasks quando viene cliccato.
-Creare l'app Vue, definendo le variabili del componente all'interno della funzione data.
-Creare i metodi addTask e removeTask per gestire l'aggiunta e la rimozione dei task e gestire il caso in cui il task abbia meno di 5 caratteri, mostrando un messaggio d'errore e rimuovendolo dopo 2 secondi.
-Montare l'app Vue sull'elemento con ID "app" utilizzando il metodo mount.
-Scrivere il codice CSS per stilizzare l'applicazione, inclusi stili per input, bottone, task e messaggio d'errore. 