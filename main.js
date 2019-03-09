/* ************************ */
//variable declarations
/* ************************ */

let xSquare = getId("x-square");
let xCube = getId("x-cube");
const swapBtn = getId("swap");
const sciOperator = document.querySelectorAll(".sci-operator");
const baseNum = document.querySelectorAll(".base-number");
const inputDisplay = document.querySelector(".p-display");
const inputOutput = document.querySelector(".p-output");
const clearBtn = document.getElementById("clear");


/* ************************ */
// function declarations
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


//Button click operation
sciOperator.forEach(function (sciOperator) {
    sciOperator.addEventListener("click", function () {
        inputDisplay.textContent += sciOperator.value;
    });
});

baseNum.forEach(function (baseNum) {
    baseNum.addEventListener("click", function () {
        inputDisplay.textContent += baseNum.value;
    });
});

clearBtn.addEventListener("click", function() {
    inputDisplay.textContent = "";
});

//Button keypress operation
document.addEventListener("keypress", function (e) {

    const validKeys = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "/", "*", "-", "+", "^", "(", ")", "="
    ];

    for (let index of validKeys) {
        if (validKeys[index] == e.key) {
            inputDisplay.textContent += e.key;
            console.log(e.key);
        }
    }

    // if (validKeys.includes(e.key)) {
    //     inputDisplay.textContent += e.key;
    //     console.log(e.key);
    // }


});



