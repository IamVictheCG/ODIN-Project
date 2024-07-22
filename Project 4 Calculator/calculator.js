let button = $(".button").toArray();
let displayScreen1 = $("#display1")[0];
let displayScreen2 = $("#display2")[0];
let deleteBtn = $("#delete")[0];
let clearBtn = $("#clear")[0];
let equalBtn = $("#equal")[0]
let sine = $("#sine")[0]
let cosine = $("#cosine")[0]
let tangent = $("#tangent")[0]
let square = $("#square")[0]
let operatorSign = $(".sign").toArray();
$(displayScreen1).val("0");

let currentInput = [];
let previousInput = '';
let truncPreviousInput = '';
let lastOperator = '';
let firstOperand = '';
let haveDot = false;
let result = null;
let tempResult = null;
let tempInput = "";
let currentInputFinal = "";
let clickedNumber = '';
let newPreviousInput = [];

operatorSign.forEach((operation) => {
    // console.log($(operation).find("p").html());
    $(operation).click(function () {
        haveDot = false;
        let operationName = $(operation).text().trim();
        lastOperator = operationName;
        console.log(lastOperator);
        previousInput += currentInputFinal;
        // console.log(previousInput);
        

        if (tempResult === null) {
            firstOperand = currentInputFinal;
        } else {
            firstOperand = tempResult;
        }
        // console.log(tempResult);
        displayScreen1.value = previousInput + lastOperator;
        previousInput += lastOperator;
        lastOperator = lastOperator.trim()

        currentInput = [];
        // console.log(Array.isArray(currentInput));
        // console.log(currentInput);
        currentInputFinal = "";
        newPreviousInput = '';


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

button.forEach(element => {
    $(element).click(function (e) {
        e.preventDefault();
        if ($(element).hasClass("number")) {
            clickedNumber = $(element).text().trim();
            currentInput.push(clickedNumber);
            currentInputFinal = "" + currentInput.join('');
            // console.log(`previousInput: ${previousInput}, object`);
            console.log(`newPreviousInput: ${newPreviousInput}`);
            
            
            
            
            if (previousInput === '') {
                $(displayScreen1).val(currentInputFinal);
            } else {
                $(displayScreen1).val(previousInput + currentInputFinal);
            }

            // if (truncPreviousInput !== '') {
            //         console.log(truncPreviousInput);
            //     currentInputFinal = truncPreviousInput + currentInputFinal;
            //     // $(displayScreen1).val(previousInput + currentInputFinal);
            //     $(displayScreen1).val(currentInputFinal);
            // }

            // if (previousInput.length - 1) {
                
            // }

            console.table([
                `firstOperand: ${firstOperand}`,
                `currentInput: ${currentInput}`,
                `currentInputFinal: ${currentInputFinal}`,
                `lastOperator: ${lastOperator}`,
                `previousInput: ${previousInput}`,
                `tempResult: ${tempResult}`,
                `displayScreen1Val: ${$(displayScreen1).val()}`
            ]);
        }




        // if ($(element).find('p').html() === '.' && !haveDot) {
        //     let dot = $(element).find('p').html();
        //     console.log(dot);
        //     haveDot = true;

            

        //     if ( $(displayScreen1).val() == 0) {
        //         currentInput.push(`0${dot}`);
        //         currentInputFinal = currentInput.join('');
        //         $(displayScreen1).val(previousInput +" "+ currentInputFinal);
        //     } else {
        //         if (currentInput.length === 0) {
        //             haveDot =  false;
        //             console.log("dead");
        //             return
        //         }
        //         currentInput.push(`${dot}`);
        //         currentInputFinal = currentInput.join('');
        //         $(displayScreen1).val(previousInput +" "+ currentInputFinal);
        //     }

        //     console.table([
        //         `firstOperand: ${firstOperand}`,
        //         `currentInput: ${currentInput}`,
        //         `currentInputFinal: ${currentInputFinal}`,
        //         `lastOperator: ${lastOperator}`,
        //         `previousInput: ${previousInput}`,
        //         `tempResult: ${tempResult}`,
        //         `haveDot: ${haveDot}`,
        //         `displayScreen1Val: ${$(displayScreen1).val()}`,
        //     ]);

        // } else if($(element).find('p').html() === '.' && haveDot) {
        //     return;
        // }

        if (firstOperand && currentInputFinal && lastOperator) {
            calculateResult();
            tempResult = result;
        }
    });
});

function calculateResult() {
    if (firstOperand === '' || currentInputFinal === '' || lastOperator === '') {
        return;
    };
    // result;
    const firstNum = parseFloat(firstOperand);
    const secondNum = parseFloat(currentInputFinal);
    switch (lastOperator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            if (secondNum === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = firstNum / secondNum;
            break;
        default:
            return;
    }
    tempResult = result
    $(displayScreen2).val(tempResult);
    // firstOperand = result;

    // console.table([
    //     `firstOperand: ${firstOperand}`,
    //     `currentInput: ${currentInput}`,
    //     `currentInputFinal: ${currentInputFinal}`,
    //     `lastOperator: ${lastOperator}`,
    //     `previousInput: ${previousInput}`,
    //     `tempResult: ${tempResult}`,
    //     `displayScreen1Val: ${$(displayScreen1).val()}`
    // ]);
    // currentInput = [];
}



let clearDisplay = (() => {
    // console.log($(displayScreen1).attr("value"));
    currentInput = [];
    lastOperator = '';
    firstOperand = '';
    previousInput = '';
    result = null;
    haveDot = false;
    currentInput = [];
    currentInputFinal = "" + currentInput.join('');
    tempResult = null;
    $(displayScreen1).val("0");
    $(displayScreen2).val('_ _ _');
    console.log(`firstOperand: ${firstOperand}`);
    console.log(`currentInputFinal: ${currentInputFinal}`);
    console.log(`lastOperator: ${lastOperator}`);
    console.log(`previousInput: ${previousInput}`);
})

    
let deleteFunction = (() => {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        currentInputFinal = "" + currentInput.join('');
        $(displayScreen1).val(previousInput + currentInputFinal);
    }
    if(currentInput.length < 1) {
        console.log(previousInput);
    }
    

    calculateResult();

    // Reset the state if both currentInput and previousInput are empty
    if (currentInput.length === 0 && previousInput.length === 0) {
        currentInput = [];
        lastOperator = '';
        firstOperand = '';
        previousInput = '';
        tempResult = null;
        $(displayScreen1).val("0");
        $(displayScreen2).val("_ _ _");
    }

    // console.table([
    //     `firstOperand: ${firstOperand}`,
    //     `currentInput: ${currentInput}`,
    //     `currentInputFinal: ${currentInputFinal}`,
    //     `lastOperator: ${lastOperator}`,
    //     `previousInput: ${previousInput}`,
    //     `tempResult: ${tempResult}`,
    //     `displayScreen1Val: ${$(displayScreen1).val()}`
    // ]);
});

let finalAnswer = (() => {
    if (currentInput.length > 0) {
        console.log($(displayScreen2).val());
        $(displayScreen1).val(tempResult);
        $(displayScreen2).val("_ _ _");
        currentInput = [];
        currentInput.push(tempResult);
        currentInputFinal = "" + currentInput.join('');
        previousInput = '';
        lastOperator = '';
        firstOperand = '';
        tempResult = null;

        console.table([
            `firstOperand: ${firstOperand}`,
            `currentInput: ${currentInput}`,
            `currentInputFinal: ${currentInputFinal}`,
            `lastOperator: ${lastOperator}`,
            `previousInput: ${previousInput}`,
            `tempResult: ${tempResult}`,
            `displayScreen1Val: ${$(displayScreen1).val()}`
        ]);

    }
})

$(clearBtn).click(() => {
    clearDisplay();
})

$(deleteBtn).click(() => {
    // console.log("object");
    deleteFunction();
})



$(equalBtn).click(function () {
    finalAnswer()
    // console.log("object");

    // calculateResult();
})

// appendOperator()