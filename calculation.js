let display = document.getElementById('display');
let calculation = '';

function appendNumber(number) {
    calculation += number;
    display.value = calculation;
}

function appendOperator(operator) {
    calculation += operator;
    display.value = calculation;
}

function calculateResult() {
    let result;
    try {
        result = eval(calculation);
    } catch (error) {
        result = 'Error';
    }
    display.value = result;
    calculation = '';
}

function clearDisplay() {
    display.value = '';
    calculation = '';
}
