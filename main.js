/* ************************ */
//variable declarations
/* ************************ */

let xSquare = getId("x-square");
let xCube = getId("x-cube");
const swapBtn = getId("swap");
const buttons = document.getElementsByTagName("button");
const sciOperator = document.querySelectorAll(".sci-operator");
const baseOperator = document.querySelectorAll(".base-operator");
const baseNum = document.querySelectorAll(".base-number");
const inputDisplay = document.querySelector(".p-display");
const inputOutput = document.querySelector(".p-output");
const clearBtn = document.getElementById("clear");
const backSpace = document.getElementById("bck-space");
const equals = document.getElementById("equals");
const historyNode = document.querySelector(".history-content");
const trash = document.querySelector(".trash-button");
let resultEvaluation = false;
let ongoingComputation = false;
let continueComputation = false;


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
swapBtn.addEventListener("click", function () {
    swapBtn.classList.toggle("is-clicked");
});


//Button click operation
sciOperator.forEach(function (sciOperator) {
    sciOperator.addEventListener("click", function () {
        for (let i = 0; i < sciOperator.length; i++) {
            if (sciOperator[i].classList.contains("base-number"))
                inputDisplay.textContent = inputDisplay.textContent;
        }
    });
});
//     sciOperator.addEventListener("click", function () {
//         for (let i = 0; i < sciOperator.length; i++) {
//             if (sciOperator[i].classList.contains("base-operator") {
//                 inputDisplay.textContent = inputDisplay.textContent;
//             }
//         }
//     )
//     );
// });

//>>What happens when a number button is clicked?
/*   If evaluation has already occurred,
 *   Pass both display and output to history
 *   Set evaluation bollean back to false.
 *   Reset output and print fresh number to Display.
 *   Check if evaluation operation is underway,
 *   If so, have Display print only current number.
 *   If not, concat and print to Display.
 */

baseNum.forEach(function (baseNum) {
    baseNum.addEventListener("click", function () {

        //When number button is clicked and resultEvaluation is false
        //If last entry of Output is Base-operator
        //set Display to Number
        //else
        //set Display to Display+ Number



        if (resultEvaluation === false) {
            if (ongoingComputation === false)
                inputDisplay.textContent += baseNum.value;
            else {
                inputDisplay.textContent = baseNum.value;
                ongoingComputation = false;
            }
        } else {
            let listItemOne = inputOutput.textContent;
            let listItemTwo = inputDisplay.textContent;
            let newNode = document.createElement("ul");
            newNode.innerHTML = `<li>${listItemOne}</li><li>${listItemTwo}</li>`;
            if (historyNode.children.length > 0) {
                historyNode.prepend(newNode);
            } else {
                historyNode.append(newNode);
            }
            inputOutput.textContent = "";
            inputDisplay.textContent = baseNum.value;
            resultEvaluation = false;
        }
         
        /*	
        When number button is clicked and resultEvaluation is true
            >	create and set list item One to Output
            >	create and set list item Two to Display
            >	if History already has a child
            >		prepend list item One and Two, in order, to History
            >	else
            >		append list items One and Two, in order, to History
            >
            > 	set Output to empty
            > 	set Display to Number
            > 	set resultEvaluation to false
        */
    }
);}
);

//Clear button behavior
clearBtn.addEventListener("click", function () {
    inputDisplay.textContent = "";
    inputOutput.textContent = "";
});

//Button keypress operation
document.addEventListener("keypress", function (e) {

    const validKeyCode = [
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        96, 97, 98, 99, 100, 101, 102, 103, 104,
        105, 106, 107, 109, 110, 111, 173
    ];

    if (validKeyCode.indexOf(e.keyCode) !== -1) {
        inputDisplay.textContent += e.key;
        console.log(e.keyCode);
    } else return false;

    // for (let index of validKeyCode) {
    //     if (validKeyCode[index] == e.keyCode) {
    //         inputDisplay.textContent += e.key;
    //         console.log(e.keyCode);
    //     }
    // }

    // if (validKeyCode.includes(e.keyCode)) {
    //     inputDisplay.textContent += e.key;
    //     console.log(e.key);
    // }


});

//Backspace button
backSpace.addEventListener("click", function () {
    let currentDisplay = inputDisplay.textContent;
    inputDisplay.textContent = currentDisplay.substr(0, currentDisplay.length - 1);
});

//Equals button
equals.addEventListener("click", function () {
    inputOutput.textContent += inputDisplay.textContent;

    let currentDisplay = eval(inputOutput.textContent);
    inputDisplay.textContent = currentDisplay;

    resultEvaluation = true;
});

//Send stuff to .p-output
baseOperator.forEach(function (baseOperator) {
    baseOperator.addEventListener("click", function () {

        if (resultEvaluation) {
            if (inputOutput.textContent === "") {
                inputOutput.textContent = inputDisplay.textContent + baseOperator.value;
            }   else {
                inputOutput.textContent = "";
                inputOutput.textContent += inputDisplay.textContent + baseOperator.value;
                ongoingComputation = true;
            }
        }   else
            inputOutput.textContent += inputDisplay.textContent + baseOperator.value;
            ongoingComputation = true;

    });
});

//Trash button behaviour
trash.addEventListener("click", function () {
    historyNode.innerHTML = "";
});