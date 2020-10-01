const calcTable = document.querySelector('.calc-table');
calcTable.addEventListener('click', takeButton);
display.value = '0';
let memory = 0;
let isSecondArg = false;
let secondArg = 0;

function takeButton(e) {
    let inputChar = e.target.innerText;
    if (!isNaN(inputChar)) inputDigits(inputChar);
    if (isNaN(inputChar)) inputOperators(inputChar);
}


function inputDigits(inputChar) {

    if (display.value === '0' || isSecondArg) {

        display.value = inputChar;
        isSecondArg = false;
    } else {

        display.value += inputChar;
    }
}

function inputOperators(inputChar) {
    if (inputChar === 'CE') clearCE();
    else if (inputChar === 'C') clearC();
    else if (inputChar === '.') inputDot(inputChar);
    else if (inputChar === '+/-') inputMines(inputChar);
    else if (inputChar === '+') operationPlus(inputChar);
    else if (inputChar === '=') operationEquals(inputChar);
    else if (inputChar === '-') operationMinus(inputChar);
    else if (inputChar === '*') operationMulti(inputChar);
    else if (inputChar === '/') operationDivision(inputChar);
    else if (inputChar === '√') operationSquareRoot(inputChar);
    else if (inputChar === 'Xⁿ') operationPow(inputChar);

}

function clearCE() {
    display.value = '0';

}

function clearC() {
    display.value = '0';
    memory = 0;
}

function inputDot(inputChar) {
    console.log('inputDot');
    console.log(isSecondArg);


    if (display.value.indexOf(inputChar) === -1 || isSecondArg) {
        if (isSecondArg) {
            display.value = '0' + inputChar;
            isSecondArg = false;
        } else {
            display.value += inputChar;
        }
    }
}



function inputMines(inputChar) {
    display.value = display.value[0] === '-' ? display.value.substring(1) : '-' + display.value;

}

function operationPlus(inputChar) {
    memory = +display.value;
    currentOperation = '+';
    isSecondArg = true;
}

function operationEquals(inputChar) {
    secondArg = +display.value;
    if (currentOperation === '+') memory += secondArg;
    if (currentOperation === '-') memory -= secondArg;
    if (currentOperation === '*') memory *= secondArg;
    if (currentOperation === '/') memory /= secondArg;
    if (currentOperation === 'Xⁿ') memory = Math.pow(memory, secondArg)

    memory = gaussRound(memory, 5);

    display.value = memory;
    isSecondArg = true;
    currentOperation = '';
}

function operationMinus(inputChar) {
    memory = +display.value;
    currentOperation = `-`;
    isSecondArg = true;
}

function operationMulti(inputChar) {
    memory = +display.value;
    currentOperation = `*`;
    isSecondArg = true;
}

function operationDivision(inputChar) {
    memory = +display.value;
    currentOperation = `/`;
    isSecondArg = true;

}

function operationSquareRoot(inputChar) {
    if (+display.value < 0) display.value = 0;
    else display.value = Math.sqrt(+display.value);
    isSecondArg = true;

}

function operationPow(inputChar) {
    console.log('pow');
    memory = +display.value;
    currentOperation = `Xⁿ`;
    isSecondArg = true;
}

function gaussRound(num, decimalPlaces) {
    let d = decimalPlaces || 0,
        m = Math.pow(10, d),
        n = +(d ? num * m : num).toFixed(8),
        i = Math.floor(n),
        f = n - i,
        e = 1e-8,
        r = (f > 0.5 - e && f < 0.5 + e) ?
        ((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return d ? r / m : r;
}