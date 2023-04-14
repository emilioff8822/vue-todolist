const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "", 
      tasks: [], 
      errorMsg: "", 
    };
  },

  methods: {

    // Metodo per aggiungere un nuovo task
    addTask() {
      // Controlla se la lunghezza del nuovo task è inferiore a 5 caratteri
      if (this.newTask.length < 5) {
        // Imposta il messaggio d'errore
        this.errorMsg = "Il testo deve avere almeno 5 caratteri.";

        // Rimuove il messaggio d'errore dopo 2 secondi
        setTimeout(() => {
          this.errorMsg = "";
        }, 2000);
      } else {
        // Aggiunge il nuovo task all'inizio dell'array "tasks"
        this.tasks.unshift({ text: this.newTask, done: false });

        // Svuota il campo di input del task
        this.newTask = "";
      }
    },

    //metodo per rimuovere un task
    removeTask (index) {
    // controlla se un task selezionato e' stato completato  
    if(this.tasks[index].done){
    // lo rimuove dall'array tasks
    this.tasks.splice(index,1);
    
    } else {
      // non ha la classe done compare il messaggio di errore
    this.errorMsg = "Attenzione puoi eliminare il task solo se e' stato fatto";
    
    // il messaggio di errore sparisce dopo 2 secondi

    setTimeout (()=>{
    this.errorMsg = "";  
    },2000);


    }
    }



  
  


  }

  
}).mount("#app");

