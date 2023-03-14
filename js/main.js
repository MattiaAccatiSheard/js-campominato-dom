// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js / css / con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
// Errata corrige: rendere le caselle "non cliccabili" e far finire la partita è un superbonus, non è richiesto dalla consegna!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
// BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//     - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: : party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio
// Di cosa ho bisogno per generare i numeri ?
//     Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
//     SUPERBONUS 1
// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
//     SUPERBONUS 2
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

/*****************************************************
 *                                                   *
 *                     ON LOAD                       *
 *                                                   *
 *****************************************************/
const startButton = document.getElementById("start")


const gridEl = document.getElementById("grid");
const gridDimension = 100;

generateGrid(gridEl, gridDimension);

/*****************************************************
 *                                                   *
 *                    FUNCTIONS                      *
 *                                                   *
 *****************************************************/

function generateGrid(gridEl, dimension) {


    // assegnare un valore casuale ad ogni cella
    const whitelist= [];
    for (let i = 0; i < dimension; i++) {
        whitelist.push(i + 1);        
    }




    // per 100 volte
    for (let i = 0; i < dimension; i++) {

        // prendo un i a caso della white list
        const randomIndex = generateRandom(0, whitelist.length - 1);        
        const squareText = whitelist[randomIndex]
        
        // lo rimuovo dalla whitelist
        whitelist.splice(randomIndex, 1);
        
        // genero un div
        const squareEl = document.createElement("div");

        // lo aggiungo all'html
        squareEl.append(squareText);

        // aggiungo la classe .square di css
        squareEl.classList.add("square");

        // aggiungo un add event listner sul click che rimuova o aggiunga o tolga la classe active al click della cella
        squareEl.addEventListener(
            "click",
            function () {
                //  this.classList.toggle("active");

                const squareText = parseInt(this.innerHTML);

                if (isEven(squareText)) {
                    this.classList.toggle("even");
                             
                } else {
                    this.classList.toggle("odd")
                }

                // TODO: controllare il valore della cella  assegnare una classe appropriata a seconda se il valore è pari o dispari

            }
        )

        // lo aggiungo alla griglia
        gridEl.appendChild(squareEl);


    }

}


// generatore numero casuale
function generateRandom(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}


// verifica se il numero è pari 
function isEven(num) {
    return num % 2 == 0;
}