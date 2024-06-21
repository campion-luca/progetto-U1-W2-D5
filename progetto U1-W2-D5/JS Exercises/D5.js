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
console.log("==============ESERCIZIO 1==============");


const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("==============ESERCIZIO 2==============");


const petAlpha = pets.sort();
console.log(petAlpha);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("==============ESERCIZIO 3==============");


const petReverse = pets.reverse()
console.log(petReverse);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("==============ESERCIZIO 4==============");

const firstPet = pets.shift();
pets.push(firstPet);
console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("==============ESERCIZIO 5==============");

const licensePlate = ["FG234LP", "PP007PP", "ER456ER"];

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

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate[i];
}

console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("==============ESERCIZIO 6==============");
// aggiunta di nuovo oggetto in ultima posizione
cars.push({
  brand: 'Toyota',
  model: 'Yaris',
  color: 'white',
  trims: ['base', 'sport', 'premium'],
  licensePlate: 'YZ789YX'
});
// tolta dell'elemento del trims
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("==============ESERCIZIO 7==============");

const justTrims = [];
//attraverso ogni oggetto nell'array cars
for (let i = 0; i < cars.length; i++) {
  //controllo se l'array trims della macchina corrente non è vuoto
  if (cars[i].trims.length > 0) {
    // se c'è qualcosa, lo aggiungo
    justTrims.push(cars[i].trims[0]);
  }
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("==============ESERCIZIO 8==============");

// ciclo l'array "cars"
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0].toLowerCase() === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
console.log("==============ESERCIZIO 9==============");

let i = 0;

while (i < numericArray.length) {
  if (numericArray[i] === 32) {
    console.log(numericArray[i]);
    break;
  } else {
    console.log(numericArray[i]);
    i++;
  }
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const arrayVuoto = [];

for (let i = 0 ; i < charactersArray.length ; i++ ) {
  let char = charactersArray[i].toLowerCase();
  switch (char) {
    case 'a':
      arrayVuoto.push(1);
      break;
    case 'b':
      arrayVuoto.push(2);
      break;
    case 'c':
      arrayVuoto.push(3);
      break;
    case 'd':
      arrayVuoto.push(4);
      break;
    case 'e':
      arrayVuoto.push(5);
      break;
    case 'f':
      arrayVuoto.push(6);
      break;
    case 'g':
      arrayVuoto.push(7);
      break;
    case 'h':
      arrayVuoto.push(8);
      break;
    case 'i':
      arrayVuoto.push(9);
      break;
    case 'l':
      arrayVuoto.push(10);
      break;
    case 'm':
      arrayVuoto.push(11);
      break;
    case 'n':
      arrayVuoto.push(12);
      break;
    case 'o':
      arrayVuoto.push(13);
      break;
    case 'p':
      arrayVuoto.push(14);
      break;
    case 'q':
      arrayVuoto.push(15);
      break;
    case 'r':
      arrayVuoto.push(16);
      break;
    case 's':
      arrayVuoto.push(17);
      break;
    case 't':
      arrayVuoto.push(18);
      break;
    case 'u':
      arrayVuoto.push(19);
      break;
    case 'v':
      arrayVuoto.push(20);
      break;
    case 'z':
      arrayVuoto.push(21);
      break;
    default:
      // Se il carattere non è nell'alfabeto italiano, non aggiungere nulla
      break;
  }
}

console.log(arrayVuoto);