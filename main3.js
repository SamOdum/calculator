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
const ceBtn = document.getElementById("ce");
const backSpace = document.getElementById("bck-space");
const equals = document.getElementById("equals");
const historyNode = document.querySelector(".history-content");
const trash = document.querySelector(".trash-button");
let resultEvaluation = false;
let ongoingComputation = false;
let continueComputation = false;
let removeZero = true;


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
            

         if (resultEvaluation) {

            inputOutput.textContent = "";
            inputDisplay.textContent = baseNum.value;
            resultEvaluation = false;
        } else {
            if (ongoingComputation){
                inputDisplay.textContent = baseNum.value;
                ongoingComputation = false;
            } else {
                if (removeZero) {
                    inputDisplay.textContent = baseNum.value;
                    removeZero = false;
                } else
                inputDisplay.textContent += baseNum.value;
            }  
        }

        

        }
    );
});

//Clear button behavior
clearBtn.addEventListener("click", function () {
    if (inputOutput.textContent !== "" && resultEvaluation) {
        listItemOne = inputOutput.textContent;
        listItemTwo = inputDisplay.textContent;
        newNode = document.createElement("ul");
        newNode.innerHTML = `<li>${listItemOne}</li><li>${listItemTwo}</li>`;

        if (historyNode.children.length > 0) {
            historyNode.prepend(newNode);
        } else {
            historyNode.append(newNode);
        }
        resultEvaluation = false;
        inputDisplay.textContent = 0;
        inputOutput.textContent = "";
    } else {
        inputDisplay.textContent = 0;
        inputOutput.textContent = "";
    }
});

ceBtn.addEventListener("click", function(){
    inputDisplay.textContent = 0;
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
    if (resultEvaluation) {
        inputDisplay.textContent = currentDisplay;
    } else {
    inputDisplay.textContent = currentDisplay.substr(0, currentDisplay.length - 1);
}
});

//Equals button
equals.addEventListener("click", function () {
    let operand = inputOutput.textContent.slice(-1);
    let  lastOutputValue;
    let  slicedLastOutputValue;
    let  lastInputDisplayValue;

    // if (resultEvaluation) {
    //     console.log(logged);
    //     let recurring = inputDisplay.textContent + operand + lastDisplayValue;
    //     inputDisplay.textContent = recurring;
    // } else {
        lastOutputValue = inputOutput.textContent;
        slicedLastOutputValue = lastOutputValue.slice(-1);
        lastInputDisplayValue = inputDisplay.textContent;
        inputOutput.textContent += inputDisplay.textContent;
        let currentDisplay = eval(inputOutput.textContent);
        inputDisplay.textContent = currentDisplay;
        
        let listItemOne = inputOutput.textContent;
        let listItemTwo = inputDisplay.textContent;
        let newNode = document.createElement("ul");
        newNode.innerHTML = `<li>${listItemOne} =</li><li>${listItemTwo}</li>`;
        if (historyNode.children.length > 0) {
            historyNode.prepend(newNode);
        } else {
            historyNode.append(newNode);
        }
        inputOutput.textContent = "";
        resultEvaluation = true;
        console.log(lastOutputValue);
    // }
    if (resultEvaluation){
        let progression = eval(inputDisplay.textContent+slicedLastOutputValue+lastInputDisplayValue);
        console.log(lastOutputValue, lastInputDisplayValue, slicedLastOutputValue);
        inputDisplay.textContent = progression;

        resultEvaluation = true;
    }
});

//Send stuff to .p-output
baseOperator.forEach(function (baseOperator) {
    baseOperator.addEventListener("click", function () {
        const numberRegex = /\d+/g;
        const lastStrChar = inputOutput.textContent.slice(-1);

        if (!resultEvaluation && inputOutput.textContent === "") {
            if (baseOperator.value == "(") {
                inputOutput.textContent = baseOperator.value;
            } else {
            inputOutput.textContent = inputDisplay.textContent + baseOperator.value;
        }
        }
        if (!resultEvaluation && inputOutput.textContent !== "") {
            if (!numberRegex.test(lastStrChar)) {
                inputOutput.textContent = inputOutput.textContent.slice(0,-1);
                inputOutput.textContent += baseOperator.value;
                ongoingComputation = true;
            } else {
                // inputOutput.textContent += inputDisplay.textContent + baseOperator.value;
            }
        }
        if (resultEvaluation) {
            if (baseOperator.value == "(") { 
                inputOutput.textContent = baseOperator.value;
            } else {
            inputOutput.textContent = inputDisplay.textContent + baseOperator.value;
            logged = baseOperator.value + inputDisplay.textContent;
        }

            ongoingComputation = true;
            resultEvaluation = false;
        }

        // if (resultEvaluation) {
        //     if (inputOutput.textContent === "") {
        //         inputOutput.textContent = inputDisplay.textContent + baseOperator.value;
        //     } else {
        //         inputOutput.textContent = "";
        //         if ('lastStrChar' != 'number') { 
        //             // delete last char from inputOtput
        //             // append current operator
        //         }
        //         inputOutput.textContent += inputDisplay.textContent + baseOperator.value;
        //         ongoingComputation = true;
        //         resultEvaluation = false;
        //     }
        // } else {
        //     if (numberRegex.test(lastStrChar)) {
        //         inputOutput.textContent += inputDisplay.textContent + baseOperator.value;
        //     } else {
        //         inputOutput.textContent = inputDisplay.textContent + baseOperator.value;
        //     }
            
        // }
        ongoingComputation = true;

    });
});

//Trash button behaviour
trash.addEventListener("click", function () {
    historyNode.innerHTML = "";
});