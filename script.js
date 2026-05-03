console.log("Hello World");

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

let firstNumber;
let seecondNumber;
let operator;

function operate(operator, number1, number2) {
    switch (operator) {
        case "+" : 
            return (add(number1, number2));
        case "-" : 
            return (substract(number1, number2));
        case "*" : 
            return (multiply(number1, number2));
        case ":" : 
            return (divide(number1, number2));
    }
}

console.log(operate("*",6,3));
