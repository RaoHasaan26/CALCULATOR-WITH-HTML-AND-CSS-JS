const calculatorScreen = document.querySelector('#calculator-screen');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            appendValue(value);
            break;
        case '=':
            calculate();
            break;
        case 'all-clear':
            clearScreen();
            break;
        case 'del':
            deleteLastChar();
            break;
        default:
            appendValue(value);
    }
});

function appendValue(value) {
    calculatorScreen.value += value;
}

function calculate() {
    try {
        calculatorScreen.value = eval(calculatorScreen.value);
    } catch {
        calculatorScreen.value = 'Error';
    }
}

function clearScreen() {
    calculatorScreen.value = '';
}

function deleteLastChar() {
    calculatorScreen.value = calculatorScreen.value.slice(0, -1);
}

