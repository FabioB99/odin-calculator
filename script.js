// --- Math operations ---

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function roundResult(number) {
    return number % 1 !== 0 ? Number(number.toFixed(2)) : number;
}

// --- Calculator functions ---

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return roundResult(add(Number(number1), Number(number2)));
        case "-":
            return roundResult(subtract(Number(number1), Number(number2)));
        case "*":
            return roundResult(multiply(Number(number1), Number(number2)));
        case "/":
            return roundResult(divide(Number(number1), Number(number2)));
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
    display.textContent = text;
}

function clear() {
    resetDisplay();
    resetNumbersAndOperators();
    manageDotButton();
}

function undo() {
    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);
        updateDisplay(firstNumber);
    } else {
        secondNumber = secondNumber.slice(0, -1);
        updateDisplay(secondNumber);
    }

}

function resetDisplay() {
    const display = document.querySelector(".display");
    display.textContent = "";
}

function resetNumbersAndOperators() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
}

function manageDotButton() {
    const dotBtn = document.querySelector(".dot");

    let currentNumber = operator === "" ? firstNumber : secondNumber;

    if (currentNumber.includes(".")) {
        dotBtn.disabled = true;
    } else {
        dotBtn.disabled = false;
    }
}

// --- Calculator Event Listeners ---

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (result !== "") { resetNumbersAndOperators(); }

        if (operator == "") {
            updateDisplay(`${firstNumber + e.target.id}`);
            updateFirstNumber(e.target.id);
        } else {
            updateDisplay(`${secondNumber + e.target.id}`);
            updateSecondNumber(e.target.id);
        }
        manageDotButton();
    });
})

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (firstNumber != "" && secondNumber != "") {
            resetDisplay();
            firstNumber = operate(operator, firstNumber, secondNumber);
            secondNumber = "";
            updateDisplay(firstNumber);
        }
        updateOperator(e.target.id);
        manageDotButton();
    });
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const undoBtn = document.querySelector(".undo");
undoBtn.addEventListener("click", undo);

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    if (firstNumber == "" || secondNumber == "" || operator == "") { } else {
        resetDisplay();
        result = operate(operator, firstNumber, secondNumber);

        if (result == Infinity) {
            const display = document.querySelector(".display");
            display.textContent = `Illegal move detected 👀`
        } else {
            updateDisplay(result);
        }
    }
})

