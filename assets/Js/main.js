
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
const numbsElement = document.getElementById('numbers')
const pcNumb = [];
let numeriScelti = []
generaNumCasuali(1, 5)
console.log(pcNumb);
//Da lì parte un timer di 30 secondi.



/* funzioni che posso richiamare */
function generaNumCasuali(min, max) {
  let randNum
  for (let i = 0; i < max; i++) {
    randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbsElement.append(randNum);
    pcNumb.push(randNum)
  }
  return randNum
}
setTimeout(function () {

  numbsElement.innerHTML = ''

}, 3000)
setTimeout(function () {


  let promtUtente = Number(prompt('inserisci i numeri che hai visto'));
  numeriScelti.push(promtUtente)

}, 3005)
console.log(numeriScelti)
if(numeriScelti == pcNumb[i]){
  console.log('ciao');
}