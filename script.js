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

function handleNumbers(input) {
    if (result !== "") { resetNumbersAndOperators(); }

    if (operator == "") {
        updateDisplay(`${firstNumber + input}`);
        updateFirstNumber(input);
    } else {
        updateDisplay(`${secondNumber + input}`);
        updateSecondNumber(input);
    }
    manageDotButton();
}

function handleOperators(input) {
    if (firstNumber != "" && secondNumber != "") {
        resetDisplay();
        firstNumber = operate(operator, firstNumber, secondNumber);
        secondNumber = "";
        updateDisplay(firstNumber);
    }
    updateOperator(input);
    manageDotButton();
}

function evaluate() {
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

function updateDisplay(text) {
    const display = document.querySelector(".display");
    display.textContent = text;
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

// --- Supporting functions ---

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

function updateFirstNumber(text) {
    firstNumber = firstNumber + text;
}

function updateSecondNumber(text) {
    secondNumber = secondNumber + text;
}

function updateOperator(text) {
    operator = text;
}

// --- Calculator Event Listeners ---

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";


const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        handleNumbers(e.target.id);
    });
})

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        handleOperators(e.target.id);
    });
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const undoBtn = document.querySelector(".undo");
undoBtn.addEventListener("click", undo);

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", evaluate)

// --- Keyboard Support ---

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "Digit1":
            handleNumbers("1");
            break;
        case "Digit2":
            handleNumbers("2");
            break;
        case "Digit3":
            handleNumbers("3");
            break;
        case "Digit4":
            handleNumbers("4");
            break;
        case "Digit5":
            handleNumbers("5");
            break;
        case "Digit6":
            handleNumbers("6");
            break;
        case "Digit7":
            if (e.shiftKey) {
                handleOperators("/");    // Shift + 7
            } else {
                handleNumbers("7");      // Just 7
            }
            break;
        case "Digit8":
            handleNumbers("8");
            break;
        case "Digit9":
            handleNumbers("9");
            break;
        case "Digit0":
            handleNumbers("0");
            break;
        case "BracketRight":
            if (e.shiftKey) {
                handleOperators("*");   // Shift + "+"
            } else {
                handleOperators("+");   // Just +
            }
            break;
        case "Slash":                   // Minus Key
            handleOperators("-");
            break;
        case "Period":                  // Minus Key
            if (e.shiftKey) {
                handleOperators("/");   // Shift + Period
            } else {
                handleNumbers(".");     // Just Period
            }
            break;   
        case "Backspace":
            undo();
            break;
        case "Enter":
            evaluate();
            break;
        case "Escape":
            clear();
            break;
    }
    console.log(e.code);
});15

