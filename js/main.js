/*****************************************************
 *                                                   *
 *                     ON LOAD                       *
 *                                                   *
 *****************************************************/
const startButton = document.getElementById("start")

startButton.addEventListener(
    "click",
    startGame
)



/*****************************************************
 *                                                   *
 *                    FUNCTIONS                      *
 *                                                   *
*****************************************************/
function startGame() {
    generateGrid(gridEl)
    const gridEl = document.getElementById("grid");
    // const gridDimension = 100;
    
}

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