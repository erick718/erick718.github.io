let calcDisplay = document.getElementById('calc-display');
let num1;
let num2;
let result;
let operator;

function showNum(value) {
    calcDisplay.textContent += value;
}

function clearDisplay() {
    calcDisplay.textContent = '';
}

function add() {
    num1 = parseFloat(calcDisplay.textContent);
    clearDisplay();
    operator = '+';
}

function subtract() {
    num1 = parseFloat(calcDisplay.textContent);
    clearDisplay();
    operator = '-';
}

function multiply() {
    num1 = parseFloat(calcDisplay.textContent);
    clearDisplay();
    operator = '*';
}

function divide() {
    num1 = parseFloat(calcDisplay.textContent);
    clearDisplay();
    operator = '/';
}

function calculate() {
    num2 = parseFloat(calcDisplay.textContent);
    if (operator === '+'){
        result = num1 + num2;
    }
    else if (operator === '-') {
        result = num1 - num2;
    }
    else if (operator === '*') {
        result = num1 * num2;
    }
    else if (operator === '/') {
        result = num1 / num2;
    }
    calcDisplay.textContent = result;
}