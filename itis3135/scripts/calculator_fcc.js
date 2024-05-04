let display = document.getElementById('calc-display');

function show(value) {
    display.textContent += value;
}

function calculate() {
    try {
        let result = eval(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function clearDisplay() {
    display.textContent = '';
}