
/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo 
il risultato.
*/

/* strumenti: 

*/

//Visualizzare in pagina 5 numeri casuali.

let pcNumb = [];
let numeriScelti = []
//RICHIAMO LA FUNZIONE A FONDO PAGINA PER GENERARE I 5 NUMERI 
generaNumCasuali(1, 5)
//CHE VENGONO PUSHATI DIRETTAMENTE IN PC NUMB
console.log(pcNumb);
const containerElement = document.querySelector('.container')
printNumbers(pcNumb, containerElement)

//FACCIO PARTIRE LA FUNZIONE CON IL CONTATORE E IL RESET DELL'INNER HTML
startgame()

//

























/* funzioni che posso richiamare */


//FUNZIONE GENERA NUMERI CASUALI DA UN MIN A UN MASSIMO
function generaNumCasuali(min, max) {
  let randNum
  for (let i = 0; i < max; i++) {
    randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    pcNumb.push(randNum)
  }
  return randNum
}
//FUNZIONE PER STAMPARE NUMERI IN PAGINA
function printNumbers(numbers, domElement) {
  domElement.innerHTML = numbers
}

//FUNZIONE PER FAR PARTIRE IL GIOCO
function startgame() {
  //TIMEOUT PER FAR SCOMPARIRE I NUMERI DALLA PAGINA 
  setTimeout(function () {
    //RESETTO IL CONTENUTO DEL CONTAINER PER FAR SCOMPARIRE I NUMERI DALLA PAGINA 
    containerElement.innerHTML = ''
  }, 3000)
  setTimeout(function () {
    //RESETTO IL CONTENUTO DEL CONTAINER PER FAR SCOMPARIRE I NUMERI DALLA PAGINA 
    const guesses = getUserGuessedNumber()
    console.log(guesses)

    //COMPARO I DUE ARRAY CON I NUMERI DEL PC E QUELLI DEL PROMPT
    const matches = comparaArray(pcNumb, guesses)
    console.log(matches);
  
  }, 3001)

}

//FUNZIONE PER RICHIEDERE 5 NUMERI ALL'UTENTE
function getUserGuessedNumber() {
  const guesses = []
  while (guesses.length < 5) {
    let guess = parseInt(prompt('prova a ricordare i numeri che hai visto'))
    if (!guesses.includes(guess)) {
      guesses.push(guess)
    } 
  }
  return guesses
}

//FUNZIONE PER COMPARARE GLI ARRAY DEL PC E DEL PROMPT 
function comparaArray(array1, array2){
 const attemps = []
 for (let i = 0; i < array1.length; i++) {
  const element = array1[i];
  if (array2.includes(element)){
    attemps.push(element)
  }
 }
 return attemps
}



















// qui sotto c'è il mio esercizio cercato di fare il giorno prima
/* //Da lì parte un timer di 30 secondi.
setTimeout(function () {

  numbsElement.innerHTML = ''

}, 3000)
setTimeout(function () {

//l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
for (let i = 0; i < 5; i++) {
  let promtUtente = Number(prompt('inserisci i numeri che hai visto'));
  numeriScelti.push(promtUtente)
}  

console.log(numeriScelti)
}, 3005)
setTimeout(function () {
  if (numeriScelti == pcNumb) {
    console.log('ciao');
  }
}, 10000) */