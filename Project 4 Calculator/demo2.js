let button = $(".button").toArray();
let displayScreen1 = $("#display1")[0];
let displayScreen2 = $("#display2")[0];
let deleteBtn = $("#delete")[0];
let clearBtn = $("#clear")[0];
let equalBtn = $("#equal")[0];
let operatorSign = $(".sign").toArray();

$(displayScreen1).val("0");
$(displayScreen2).val("0");

let currentInput = [];
let previousInput = "";
let lastOperator = "";
let firstOperand = "";
let haveDot = false;
let result = null;
let tempResult = null;
let currentInputFinal = "";
let clickedNumber = "";

operatorSign.forEach((operation) => {
    $(operation).click(function () {
        let operationName = $(operation).text().trim();
        lastOperator = operationName;
        previousInput += currentInputFinal;
        tempResult = result;

        if (tempResult === null) {
            firstOperand = currentInputFinal;
        } else {
            firstOperand = tempResult;
        }

        displayScreen1.value = previousInput + lastOperator;
        previousInput += lastOperator;

        currentInput = [];
        currentInputFinal = "";

        console.table([
            `firstOperand: ${firstOperand}`,
            `currentInput: ${currentInput}`,
            `currentInputFinal: ${currentInputFinal}`,
            `lastOperator: ${lastOperator}`,
            `previousInput: ${previousInput}`,
            `tempResult: ${tempResult}`,
            `displayScreen1Val: ${$(displayScreen1).val()}`,
        ]);
    });
});

button.forEach((element) => {
    $(element).click(function (e) {
        e.preventDefault();
        if ($(element).hasClass("number")) {
            clickedNumber = $(element).text().trim();
            currentInput.push(clickedNumber);
            currentInputFinal = currentInput.join("");

            if (previousInput === "") {
                $(displayScreen1).val(currentInputFinal);
            } else {
                $(displayScreen1).val(previousInput + currentInputFinal);
            }

            console.table([
                `firstOperand: ${firstOperand}`,
                `currentInput: ${currentInput}`,
                `currentInputFinal: ${currentInputFinal}`,
                `lastOperator: ${lastOperator}`,
                `previousInput: ${previousInput}`,
                `tempResult: ${tempResult}`,
                `displayScreen1Val: ${$(displayScreen1).val()}`,
            ]);
        }

        if (firstOperand && currentInputFinal && lastOperator) {
            calculateResult();
            tempResult = result;
        }
    });
});

function calculateResult() {
    if (lastOperator === "+") {
        result = parseFloat(firstOperand) + parseFloat(currentInputFinal);
    } else if (lastOperator === "-") {
        result = parseFloat(firstOperand) - parseFloat(currentInputFinal);
    } else if (lastOperator === "×") {
        result = parseFloat(firstOperand) * parseFloat(currentInputFinal);
    } else if (lastOperator === "÷") {
        result = parseFloat(firstOperand) / parseFloat(currentInputFinal);
    }

    $(displayScreen2).val(result);
}

$(clearBtn).click(function () {
    $(displayScreen1).val("0");
    $(displayScreen2).val("0");
    currentInput = [];
    previousInput = "";
    lastOperator = "";
    firstOperand = "";
    result = null;
    tempResult = null;
    currentInputFinal = "";
    clickedNumber = "";
});

$(deleteBtn).click(function () {
    currentInput.pop();
    currentInputFinal = currentInput.join("");
    if (currentInput.length === 0) {
        $(displayScreen1).val("0");
    } else {
        $(displayScreen1).val(previousInput + currentInputFinal);
    }
});

$(equalBtn).click(function () {
    calculateResult();
    $(displayScreen1).val(result);
    $(displayScreen2).val("");
    currentInput = [];
    previousInput = "";
    lastOperator = "";
    firstOperand = result;
    result = null;
    tempResult = null;
    currentInputFinal = "";
    clickedNumber = "";
});

//=============================================================================

// let button = $(".button").toArray();
// let displayScreen1 = $("#display1")[0];
// let displayScreen2 = $("#display2")[0];
// let deleteBtn = $("#delete")[0];
// let clearBtn = $("#clear")[0];
// let equalBtn = $("#equal")[0]
// let operatorSign = $(".sign").toArray();
// // console.log(operatorSign); 
// $(displayScreen1).val("0");
// // $(displayScreen2).val("0");

// let currentInput = [];
// let previousInput = '';
// let truncPreviousInput = '';
// let lastOperator = '';
// let firstOperand = '';
// let haveDot = false;
// let result = null;
// let tempResult = null;
// let tempInput = "";
// let currentInputFinal = "";
// let clickedNumber = '';
// let newPreviousInput = [];

// operatorSign.forEach((operation) => {
//     // console.log($(operation).find("p").html());
//     $(operation).click(function () {
//         haveDot = false;
//         let operationName = $(operation).text().trim();
//         lastOperator = operationName;
//         console.log(lastOperator);
//         previousInput += currentInputFinal;
//         console.log(previousInput);
        

//         if (tempResult === null) {
//             firstOperand = currentInputFinal;
//         } else {
//             firstOperand = tempResult;
//         }
//         console.log(tempResult);
//         displayScreen1.value = previousInput + lastOperator;
//         previousInput += lastOperator;
//         lastOperator = lastOperator.trim()

//         currentInput = [];
//         console.log(Array.isArray(currentInput));
//         console.log(currentInput);
//         currentInputFinal = "";
//         newPreviousInput = '';


//         // console.table([
//         //     `firstOperand: ${firstOperand}`,
//         //     `currentInput: ${currentInput}`,
//         //     `currentInputFinal: ${currentInputFinal}`,
//         //     `lastOperator: ${lastOperator}`,
//         //     `previousInput: ${previousInput}`,
//         //     `tempResult: ${tempResult}`,
//         //     `displayScreen1Val: ${$(displayScreen1).val()}`,
//         // ]);
//     });
// });

// button.forEach(element => {
//     $(element).click(function (e) {
//         e.preventDefault();
//         if ($(element).hasClass("number")) {
//             clickedNumber = $(element).text().trim();
//             currentInput.push(clickedNumber);
//             currentInputFinal = "" + currentInput.join('');
//             // console.log(`previousInput: ${previousInput}, object`);
//             console.log(`newPreviousInput: ${newPreviousInput}`);
            
            
            
            
//             if (previousInput === '') {
//                 $(displayScreen1).val(currentInputFinal);
//             } else {
//                 $(displayScreen1).val(previousInput + currentInputFinal);
//             }

//             // if (truncPreviousInput !== '') {
//             //         console.log(truncPreviousInput);
//             //     currentInputFinal = truncPreviousInput + currentInputFinal;
//             //     // $(displayScreen1).val(previousInput + currentInputFinal);
//             //     $(displayScreen1).val(currentInputFinal);
//             // }

//             // if (previousInput.length - 1) {
                
//             // }

//             console.table([
//                 `firstOperand: ${firstOperand}`,
//                 `currentInput: ${currentInput}`,
//                 `currentInputFinal: ${currentInputFinal}`,
//                 `lastOperator: ${lastOperator}`,
//                 `previousInput: ${previousInput}`,
//                 `tempResult: ${tempResult}`,
//                 `displayScreen1Val: ${$(displayScreen1).val()}`
//             ]);
//         }




//         // if ($(element).find('p').html() === '.' && !haveDot) {
//         //     let dot = $(element).find('p').html();
//         //     console.log(dot);
//         //     haveDot = true;

            

//         //     if ( $(displayScreen1).val() == 0) {
//         //         currentInput.push(`0${dot}`);
//         //         currentInputFinal = currentInput.join('');
//         //         $(displayScreen1).val(previousInput +" "+ currentInputFinal);
//         //     } else {
//         //         if (currentInput.length === 0) {
//         //             haveDot =  false;
//         //             console.log("dead");
//         //             return
//         //         }
//         //         currentInput.push(`${dot}`);
//         //         currentInputFinal = currentInput.join('');
//         //         $(displayScreen1).val(previousInput +" "+ currentInputFinal);
//         //     }

//         //     console.table([
//         //         `firstOperand: ${firstOperand}`,
//         //         `currentInput: ${currentInput}`,
//         //         `currentInputFinal: ${currentInputFinal}`,
//         //         `lastOperator: ${lastOperator}`,
//         //         `previousInput: ${previousInput}`,
//         //         `tempResult: ${tempResult}`,
//         //         `haveDot: ${haveDot}`,
//         //         `displayScreen1Val: ${$(displayScreen1).val()}`,
//         //     ]);

//         // } else if($(element).find('p').html() === '.' && haveDot) {
//         //     return;
//         // }

//         if (firstOperand && currentInputFinal && lastOperator) {
//             calculateResult();
//             tempResult = result;
//         }
//     });
// });

// function calculateResult() {
//     if (firstOperand === '' || currentInputFinal === '' || lastOperator === '') {
//         return;
//     };
//     // result;
//     const firstNum = parseFloat(firstOperand);
//     const secondNum = parseFloat(currentInputFinal);
//     switch (lastOperator) {
//         case '+':
//             result = firstNum + secondNum;
//             tempResult = result;
//             break;
//         case '-':
//             result = firstNum - secondNum;
//             tempResult = result;
//             break;
//         case '*':
//             result = firstNum * secondNum;
//             tempResult = result;
//             break;
//         case '/':
//             if (secondNum === 0) {
//                 alert('Cannot divide by zero');
//                 clearDisplay();
//                 return;
//             }
//             result = firstNum / secondNum;
//             tempResult = result;
//             break;
//         default:
//             return;
//     }

//     $(displayScreen2).val(result);
//     // firstOperand = result;

//     console.table([
//         `firstOperand: ${firstOperand}`,
//         `currentInput: ${currentInput}`,
//         `currentInputFinal: ${currentInputFinal}`,
//         `lastOperator: ${lastOperator}`,
//         `previousInput: ${previousInput}`,
//         `tempResult: ${tempResult}`,
//         `displayScreen1Val: ${$(displayScreen1).val()}`
//     ]);
//     // currentInput = [];
// }



// let clearDisplay = (() => {
//     // console.log($(displayScreen1).attr("value"));
//     currentInput = '';
//     lastOperator = '';
//     firstOperand = '';
//     previousInput = '';
//     result = null;
//     haveDot = false;
//     $(displayScreen1).val("0");
//     $(displayScreen2).val('_ _ _');
//     console.log(`firstOperand: ${firstOperand}`);
//     console.log(`currentInputFinal: ${currentInputFinal}`);
//     console.log(`lastOperator: ${lastOperator}`);
//     console.log(`previousInput: ${previousInput}`);
// })

    
// let deleteFunction = (() => {
//     if (currentInput.length === 1) {
//         console.log(currentInput.length);
//         $(displayScreen2).val("_ _ _");  
//     }

//     if (currentInput.length === 0) {
//         // Handle case where there is no current input but there is previous input
//         if (previousInput.length !== 0) {  // Check if previousInput is not empty
//             console.log("previousInput: " + typeof(previousInput));
//             console.log(previousInput);
//             newPreviousInput = Array.from(previousInput);
//             // Pop the last character from the previous input
//             let poppedChar = newPreviousInput.pop();
//             previousInput = newPreviousInput.join("");
//             console.log("newPreviousInput2: " + typeof(previousInput));
//             console.log(previousInput);

//             // Check if the popped character was an operator
//             if (["+", "-", "*", "/"].includes(poppedChar)) {
//                 lastOperator = '';
//                 // truncPreviousInput = previousInput
//                 // console.log("truncPreviousInput " + truncPreviousInput);
//                 if (newPreviousInput.length > 0) {
//                     // If there's still input left, extract the firstOperand and reset the state
//                     tempInput = previousInput.match(/(\d+\.?\d*)$/);
//                     if (tempInput) {
//                         firstOperand = tempInput[0];
//                         console.log(`firstOperand: ${firstOperand}`);
//                     }
//                 } else {
//                     firstOperand = '';
//                 }
//                 currentInputFinal = '';
//             } else {
//                 currentInputFinal = currentInput.join("");
//             }
            
//             $(displayScreen1).val(previousInput + currentInputFinal);
            
//         }
//     } else {
//         // Pop the last character from the current input
//         currentInput.pop();
//         currentInputFinal = currentInput.join("");
//         $(displayScreen1).val(previousInput + currentInputFinal);
//     }

//     calculateResult();

//     // Reset the state if both currentInput and previousInput are empty
//     if (currentInput.length === 0 && previousInput.length === 0) {
//         currentInput = [];
//         lastOperator = '';
//         firstOperand = '';
//         previousInput = '';
//         tempResult = null;
//         $(displayScreen1).val("0");
//         $(displayScreen2).val("_ _ _");
//     }

//     // console.table([
//     //     `firstOperand: ${firstOperand}`,
//     //     `currentInput: ${currentInput}`,
//     //     `currentInputFinal: ${currentInputFinal}`,
//     //     `lastOperator: ${lastOperator}`,
//     //     `previousInput: ${previousInput}`,
//     //     `tempResult: ${tempResult}`,
//     //     `displayScreen1Val: ${$(displayScreen1).val()}`
//     // ]);
// });    

// $(clearBtn).click(() => {
//     clearDisplay();
// })

// $(deleteBtn).click(() => {
//     // console.log("object");
//     deleteFunction();
// })



// $(equalBtn).click(function () {
//     // console.log("object");

//     // calculateResult();
// })

// // appendOperator()


//======================================================================================

// let deleteFunction = (() => {
//     if (currentInput.length === 1) {
//         console.log(currentInput.length);
//         $(displayScreen2).val("_ _ _");  
//     }

//     if (currentInput.length === 0) {
//         // Handle case where there is no current input but there is previous input
//         if (previousInput.length !== 0) {  // Check if previousInput is not empty
//             console.log("previousInput: " + typeof(previousInput));
//             console.log(previousInput);
//             newPreviousInput = Array.from(previousInput);
//             console.log(newPreviousInput);
//             // Pop the last character from the previous input
//             let poppedChar = newPreviousInput.pop();
//             previousInput = newPreviousInput.join("");
//             console.log("newPreviousInput2: " + typeof(previousInput));
//             console.log(previousInput);

//             // Check if the popped character was an operator
//             if (["+", "-", "*", "/"].includes(poppedChar)) {
//                 lastOperator = '';
//                 // tempResult = null;
//                 // truncPreviousInput = previousInput
//                 // console.log("truncPreviousInput " + truncPreviousInput);
                
//                 currentInputFinal = '';
//             } else {
//                 currentInputFinal = currentInput.join("");
//             }

//             if (newPreviousInput.length > 0) {
//                 console.log("newPreviousInput.length");
//                 // If there's still input left, extract the firstOperand and reset the state
//                 // tempInput = previousInput.match(/(\d+\.?\d*)$/);
//                 // console.log("tempInput: " + tempInput);

//                 function evaluateExpression(arr) {
//                     // Concatenate numbers
//                     let expression = [];
//                     let number = "";
                
//                     arr.forEach(item => {
//                         if (!isNaN(item)) {
//                             number += item;
//                         } else {
//                             if (number !== "") {
//                                 expression.push(number);
//                                 number = "";
//                             }
//                             expression.push(item);
//                         }
//                     });
                
//                     if (number !== "") {
//                         expression.push(number);
//                     }

//                     if (isNaN(expression[expression.length - 1])) {
//                         lastOperator = toString(expression.pop()); // Remove the last operator from the expression array
//                     }
                
//                     // Evaluate the expression
//                     let resultt = parseFloat(expression[0]);
//                     for (let i = 1; i < expression.length; i += 2) {
//                         let operator = expression[i];
//                         let nextNumber = parseFloat(expression[i + 1]);
                
//                         switch (operator) {
//                             case '+':
//                                 resultt += nextNumber;
//                                 break;
//                             case '-':
//                                 resultt -= nextNumber;
//                                 break;
//                             case '*':
//                                 resultt *= nextNumber;
//                                 break;
//                             case '/':
//                                 resultt /= nextNumber;
//                                 break;
//                         }
//                     }

//                     tempResult = resultt;
//                     return resultt;
//                 }
                
//                 let arr = newPreviousInput;
//                 console.log(arr);
//                 firstOperand = evaluateExpression(arr);
//                 console.log(lastOperator);
//                 console.log(firstOperand);
//                 $(displayScreen2).val(tempResult)

//                 console.table([
//         `firstOperand: ${firstOperand}`,
//         `currentInput: ${currentInput}`,
//         `currentInputFinal: ${currentInputFinal}`,
//         `lastOperator: ${lastOperator}`,
//         `previousInput: ${previousInput}`,
//         `tempResult: ${tempResult}`,
//         `displayScreen1Val: ${$(displayScreen1).val()}`
//                 ]);
                
//             } else {
//                 firstOperand = '';
//             }
            
//             $(displayScreen1).val(previousInput + currentInputFinal);
            
//         }
//     } else {
//         // Pop the last character from the current input
//         currentInput.pop();
//         currentInputFinal = currentInput.join("");
//         $(displayScreen1).val(previousInput + currentInputFinal);
//     }

//     calculateResult();

//     // Reset the state if both currentInput and previousInput are empty
//     if (currentInput.length === 0 && previousInput.length === 0) {
//         currentInput = [];
//         lastOperator = '';
//         firstOperand = '';
//         previousInput = '';
//         tempResult = null;
//         $(displayScreen1).val("0");
//         $(displayScreen2).val("_ _ _");
//     }

    // console.table([
    //     `firstOperand: ${firstOperand}`,
    //     `currentInput: ${currentInput}`,
    //     `currentInputFinal: ${currentInputFinal}`,
    //     `lastOperator: ${lastOperator}`,
    //     `previousInput: ${previousInput}`,
    //     `tempResult: ${tempResult}`,
    //     `displayScreen1Val: ${$(displayScreen1).val()}`
    // ]);
// });    