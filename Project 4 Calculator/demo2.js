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
