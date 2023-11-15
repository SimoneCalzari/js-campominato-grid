'use strict';

//INIZIO FUNZIONI

// FUNZIONE CREAZIONE,INSERIMENTO E AGGIUNTA EVENTLISTENER ALLE CELLE
function newElements(typeElement, classElement, numElements) {
  //CICLO FOR PER CREARE E INSERIRE UN CERTO NUMERO DI CELLE
  for (let i = 1; i <= numElements; i++) {
    const cell = document.createElement(typeElement); // CREO NUOVA CELLA
    cell.classList = classElement; // ASSEGNO LA CLASSE
    cell.innerHTML = `${i}`; // INSERISCO CONTENUTO
    field.append(cell); // INSERISCO NELL HTML DENTRO AL FIELD
    // EVENT LISTENER ALLE CELLE
    cell.addEventListener('click',
    function() {
      cell.classList.add('cell-clicked'); // AGGIUNGO CLASSE AL CLICKED PER CAMBIARE SFONDO CELLA
      console.log(`La cella cliccata è la ${cell.innerHTML}`); // MOSTRO IN CONSOLE LA CELLA CLICCATA
    })
  }
}

// FUNZIONE CHE AGGIUNGE UN EVENTLISTENER AL BOTTONE PLAY QUANDO CLICCO
function clickPlay() {
  button.addEventListener('click', 
    function() {
      field.innerHTML = ''; // SVUOTO FIELD ALTRIMENTI ANDREI AD AGGIUNGERE CELLE AD UN SECONDO CLICK
      field.classList.add('active'); // FIELD DI DEFAULT NON VISIBILE, AGGIUNGO CLASSE PER RENDERLO VISIBILE
      newElements('div', 'cell-10', 100); // RICHIAMO FUNZIONE GENERA CELLA E GLI PASSO I PARAMETRI PER LA DIFFICOLTà DI DEFAULT
      select.value = 'Hard'; // RIPORTO IL SELECT L VALORE DI DEFAULT
    }
  )
}

// FUNZIONE PER GESTIRE I LIVELLI DI DIFFICOLTA E CAMBIARE IL NUMERO DI CELLE
function selectDifficulty() {
  // ASCOLTATORE DI EVENTI QUANDO IL VALUE DI SELECT CAMBIA
  select.addEventListener('change',
  function() {
    field.innerHTML = '';
    field.classList.add('active'); // SE VOGLIAMO FAR COMPARIRE LA GRIGLIA ANCHE PRIMA DI PREMERE SU PLAY QUESTA CLASSE SERVE
    // CASO DIFFICOLTà SEMPLICE
    if (select.value === 'Easy'){
      newElements('div', 'cell-7', 49);
    } 
    // CASO DIFFICOLTà MEDIA
    else if (select.value === 'Medium'){
      newElements('div', 'cell-9', 81);
    }
    // CASO DIFFICOLTà DIFFICILE(DEFAULT) 
    else {
      newElements('div', 'cell-10', 100);
    }
  }
  )
}

//FINE FUNZIONI




// LOGICA PROGRAMMA

// VARIABILI DEGLI ELEMENTI DEL DOM UTILIZZATI NELLA FUNCTION
const field = document.querySelector('div.field');
const button = document.querySelector('button');
const select = document.querySelector('select');


// CHIAMO LE FUNZIONI PER IL MIO GIOCO
clickPlay();
selectDifficulty();







