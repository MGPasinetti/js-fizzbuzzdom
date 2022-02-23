// Consegna:

// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento!


//Variabili
let listNumber;
let container = document.querySelector(".container")

// Genero i numeri da 1 a 100
for (i = 1; i <= 100; i++) {
  listNumber = i;


  if ((listNumber % 3 == 0) && (listNumber % 5 == 0)) {
    console.log('FizzBuzz');
  } else if (listNumber % 3 == 0) {
    console.log('Fizz');
  } else if (listNumber % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(listNumber);
  }

}

//Appendo un elemento html con il numero o la stringa corretta
let areaNumbers = document.createElement(`div`)
container.append(areaNumbers)

for (i = 1; i <= 100; i++) {
    listNumber = i;
  
  
    if ((listNumber % 3 == 0) && (listNumber % 5 == 0)) {
      areaNumbers.innerHTML += `<div class="box fizz-buzz">${`FizzBuzz`}</div>`
    } else if (listNumber % 3 == 0) {
      areaNumbers.innerHTML += `<div class="box fizz">${`Fizz`}</div>`
    } else if (listNumber % 5 == 0) {
      areaNumbers.innerHTML += `<div class="box buzz">${`Buzz`}</div>`
    } else {
      areaNumbers.innerHTML += `<div class="box">${listNumber}</div>`
    }
  
}





