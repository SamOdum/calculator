/* ************************ */
//variable declarations
/* ************************ */

let xSquare = getId("x-square");
let xCube = getId("x-cube");
const swapBtn = getId("swap");
let sciOperator = document.querySelectorAll(".sci-operator");
const baseNum = document.querySelectorAll(".base-number");


/* ************************ */
// function declaretions
/* ************************ */

//function for getting DOM node Ids.
function getId(idName) {
    return document.getElementById(idName);
}

//function for swapping calculator buttons
function swapButtons() {
    for (let i = 0; i < sciOperator.length; i++)
        if (sciOperator[i].classList == "sci-operator first-set is-visible")
            sciOperator[i].classList.remove("is-visible");
        else if (sciOperator[i].classList == "sci-operator second-set is-visible")
            sciOperator[i].classList.remove("is-visible");
        else
            sciOperator[i].classList.add("is-visible");


    console.log("You Clicked Swap!");

}

/* ************************ */
//event listeners
/* ************************ */


//listen for click on swapBtn and call swapButtons()
swapBtn.addEventListener("click", swapButtons);
swapBtn.addEventListener("click", function(){
    swapBtn.classList.toggle("is-clicked");
});


//demonstrate that buttons are firing OK
sciOperator.forEach(function (sciOperator) {
    sciOperator.addEventListener("click", function () {
        console.log(sciOperator.id);
    });
});
sciOperator.forEach(function (sciOperator) {
    sciOperator.addEventListener("click", function () {
        console.log(sciOperator.id);
    });
});
baseNum.forEach(function (baseNum) {
    baseNum.addEventListener("click", function () {
        console.log(baseNum.id);
    });
});


