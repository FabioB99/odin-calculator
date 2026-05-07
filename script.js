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

    let num = Number(text);
    display.textContent = num % 1 !== 0 ? Number(num.toFixed(2)) : num;

}

function clear() {
    resetDisplay();
    resetNumbersAndOperators();  
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


// --- Calculator Event Listeners ---

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";


const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (result !== "") {
            resetNumbersAndOperators();
        }

        if (operator == "") {
            updateDisplay(`${firstNumber + e.target.id}`);
            updateFirstNumber(e.target.id);
        } else {
            updateDisplay(`${secondNumber + e.target.id}`);
            updateSecondNumber(e.target.id);
        }

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
    });
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    if (firstNumber == "" | secondNumber == "" | operator == "") { } else {
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

