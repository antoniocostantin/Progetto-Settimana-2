/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(">>>>>>>>>>ESERCIO 1<<<<<<<<<");

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(">>>>>>>>>>ESERCIO 2<<<<<<<<<");
const petss = pets.sort();
console.log(petss);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(">>>>>>>>>>ESERCIO 3<<<<<<<<<");
const petsRev = petss.reverse();

console.log(petsRev);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log(">>>>>>>>>>ESERCIO 4<<<<<<<<<");

let primo = petsRev.shift();
petsRev.push(primo);
console.log(petsRev);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log(">>>>>>>>>>ESERCIO 5<<<<<<<<<");

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "BB111ZZ";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log(">>>>>>>>>>ESERCIO 6<<<<<<<<<");

cars.push({
  brand: 'Fiat',
  model: 'Panda',
  color: 'red',
  trims: ['war', 'fuoristrada', 'gaio', 'elegante'],
  licensePlate: 'BB333ZZZ'
})

console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log(">>>>>>>>>>ESERCIO 7<<<<<<<<<");

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims[i] = Object.assign(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log(">>>>>>>>>>ESERCIO 8<<<<<<<<<");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 789, 74, 31, 2, 8, 23, 100, 25, 49, 32, 66, 313, 321, 105,
]
console.log(">>>>>>>>>>ESERCIO 9<<<<<<<<<");

let k = 0;

while (k < numericArray.length) {
  console.log(numericArray[k]);
  if (numericArray[k] === 32) {
    k = numericArray.length;
  }
  k++
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log(">>>>>>>>>>ESERCIO 10<<<<<<<<<");

const charactersArray = ['g','k','l','m','h','o','a', 'n', 'u', 'z', 'd'];
const newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      newArray[i] = 1;
      break;
    case 'b':
      newArray[i] = 2;
      break;
    case 'c':
      newArray[i] = 3;
      break;
    case 'd':
      newArray[i] = 4;
      break;
    case 'e':
      newArray[i] = 5;
      break;
    case 'f':
      newArray[i] = 6;
      break;
    case 'g':
      newArray[i] = 7;
      break;
    case 'h':
      newArray[i] = 8;
      break;
    case 'i':
      newArray[i] = 9;
      break;
    case 'l':
      newArray[i] = 10;
      break;
    case 'm':
      newArray[i] = 11;
      break;
    case 'n':
      newArray[i] = 12;
      break;
    case 'o':
      newArray[i] = 13;
      break;
    case 'p':
      newArray[i] = 14;
      break;
    case 'q':
      newArray[i] = 15;
      break;
    case 'r':
      newArray[i] = 16;
      break;
    case 's':
      newArray[i] = 17;
      break;
    case 't':
      newArray[i] = 18;
      break;
    case 'u':
      newArray[i] = 19;
      break;
    case 'v':
      newArray[i] = 20;
      break;
    case 'z':
      newArray[i] = 21;
      break;
    default:
      newArray[i] = 0;
      break;
  }
}

console.log(newArray);