//Variabili
let listNumber;

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
let container = document.querySelector(`#container`);
let areaNumbers = document.createElement(`div`);
container.append(areaNumbers);

for (i = 1; i <= 100; i++) {
    listNumber = i;
  
  
    if ((listNumber % 3 == 0) && (listNumber % 5 == 0)) {
      areaNumbers.innerHTML += `<div class="box fizz-buzz">fizzbuzz</div>`
    } else if (listNumber % 3 == 0) {
      areaNumbers.innerHTML += `<div class="box fizz">fizz</div>`
    } else if (listNumber % 5 == 0) {
      areaNumbers.innerHTML += `<div class="box buzz">buzz</div>`
    } else {
      areaNumbers.innerHTML += `<div class="box">${listNumber}</div>`
    }
  
}