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
const backSpace = document.getElementById("bck-space");


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

    const validKeyCode = [
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        96, 97, 98, 99, 100, 101, 102, 103, 104,
        105, 106, 107, 109, 110, 111, 173
    ];

    // for (let index in validKeyCode) {
    //     if (validKeyCode[index] == e.keyCode) {
    //         inputDisplay.textContent += e.key;
    //         console.log(e.keyCode);
    //     }
    // }

    if (validKeyCode.includes(e.keyCode)) {
        inputDisplay.textContent += e.key;
        console.log(e.key);
    }


});

//Backspace button
backSpace.addEventListener("click", function() {
    let currentDisplay = inputDisplay.textContent;
    inputDisplay.textContent = currentDisplay.substr(0, currentDisplay.length-1);
});

