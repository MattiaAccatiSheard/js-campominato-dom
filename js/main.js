// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// on load
const btn = document.getElementById("btn");
const gridDimension = 100;


btn.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        generatore(gridEl, gridDimension);        
    }    
    )





//FUNZIOINI//
function generatore(grid, dimension) {
    
    const list = [];
    for (let i = 0; i < dimension; i++) {
        list.push(i + 1);
    }
    // console.log(list);
    

    // grid.InnerHTML = "";
    for (let i = 0; i < dimension; i++) {

        // prendo un i a caso dalla list 
        // const randomLista = generateRandom (0, lista.lenght - 1);
        const randomLista = generateRandom(0, list.lenght - 1);
        const value = list[randomLista];
        console.log(value);
        // lo rimuovo e lo aggiungo all'html di un elemento square

        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.append(i + 1);


        squareEl.addEventListener(
            "click",
            function () {
                console.log(this);
                this.classList.toggle("active");
                console.log(squareEl);
            }
            )
        grid.append(squareEl);

    }
}


function generateRandom(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}