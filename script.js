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
            return (add(Number(number1), Number(number2)));
        case "-":
            return (substract(Number(number1), Number(number2)));
        case "*":
            return (multiply(Number(number1), Number(number2)));
        case "/":
            return (divide(Number(number1), Number(number2)));
    }
}

function updateFirstNumber(text) {
    firstNumber = firstNumber + text;
}

function updateSecondNumber(text) {
    secondNumber = secondNumber + text;
}

function updateOperator(text) {
    operator = text;
}

function updateDisplay(text) {
    const display = document.querySelector(".display");
    display.textContent = display.textContent + text;
}

function clear() {
    const display = document.querySelector(".display");
    display.textContent = "";

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function resetDisplay() {
    const display = document.querySelector(".display");
    display.textContent = "";
}

// --- Calculator Event Listeners ---

let firstNumber = "";
let secondNumber = "";
let operator = "";


const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach((button) => {
    button.addEventListener("click", (e) => {

        if (operator == "") {
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
        updateDisplay(` ${e.target.textContent} `);
    });
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    if (firstNumber == "" | secondNumber == "" | operator == "") {} else {
        resetDisplay();
        updateDisplay(operate(operator, firstNumber, secondNumber))
    }

})

