// --- Math operations ---

function add(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

// --- Calculator functions ---

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return (add(number1, number2));
        case "-":
            return (substract(number1, number2));
        case "*":
            return (multiply(number1, number2));
        case ":":
            return (divide(number1, number2));
    }
}

function updateFirstNumber(text) {
    firstNumber = firstNumber + text;
    console.log(firstNumber);
}

function updateSecondNumber(text) {
    secondNumber = secondNumber + text;
    console.log(secondNumber);
}


function updateOperator(text) {
    operator = text;
    console.log(operator);
}

function updateDisplay(text) {
    const display = document.querySelector(".display");
    display.textContent = display.textContent + text;
}

function clearDisplay() {
    const display = document.querySelector(".display");
    display.textContent = "";
}

// --- Calculator Event Listeners ---

let firstNumber = "";
let secondNumber = "";
let operator;


const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach((button) => {
    button.addEventListener("click", (e) => {

        if (operator == undefined) {
            updateFirstNumber(e.target.id);
            updateDisplay(e.target.id);
        } else {
            updateSecondNumber(e.target.id);
            updateDisplay(e.target.id);
        }

    });
})


const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        updateOperator(e.target.id);
        updateDisplay(e.target.id);
    });
})

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    console.log(operate(operator, firstNumber, secondNumber));


})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);