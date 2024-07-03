let display = document.getElementById('display');
let operator = '';
let number1 = '';
let number2 = '';

function addNumber(num) {
    let currentValue = display.value;
    display.value = currentValue + num;
}

function addOperator(op) {
    display.value += op;
    operator = op;
    number1 = display.value.substring(0, display.value.length - 1);
    display.value = '';
}

function clearDisplay() {
    display.value = '';
    operator = '';
    number1 = '';
    number2 = '';
}

function calculate() {
    if (!display.value) return; 
    number2 = display.value;
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            break;
        case '/':
            if (parseFloat(number2) === 0) {
                display.value = 'Error: Division by zero';
                return;
            }
            result = parseFloat(number1) / parseFloat(number2);
            break;
    }
    display.value = number1 + operator + number2 + '=' + result;
}