'use strict';

/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/



function newElements(typeElement, classElement, numElements) {
  for (let i = 1; i < numElements + 1; i++) {
    const element = document.createElement(typeElement);
    element.classList = classElement;
    element.innerText = `${i}`;
    field.append(element);
  }
}

function elementsListener (numElements) {
  for (let i = 1; i < numElements + 1; i++) {
    const element = document.querySelector(`div.field div:nth-child(${i})`);
    element.addEventListener('click',
    function() {
      element.classList.add('active');
      console.log(`La cella cliccata è la ${i}`);
    })
  }

}


const field = document.querySelector('div.field');
console.log(field);

const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', 
  function() {
    field.innerHTML = '';
    field.classList.add('active');
    newElements('div', 'cell-10', 100);
    elementsListener(100);
  }
);
