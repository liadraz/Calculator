
//
// Query selector divs
const numberBtns = document.querySelectorAll('.data-number');
const operatorBtns = document.querySelectorAll('.data-operator');

const equalBtn = document.getElementById('equal');
const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const negativeBtn = document.getElementById('negative');
const pointBtn = document.getElementById('point');

const historyDis = document.querySelector('.history-dis');
const currDis = document.querySelector('.curr-dis');


//
// Events Handling
equalBtn.addEventListener('click', Evaluate);
allClearBtn.addEventListener('click', ClearAllScreen)
deleteBtn.addEventListener('click', DeleteDigit)
negativeBtn.addEventListener('click', Negation)
pointBtn.addEventListener('click', ToFloat)

// In case user clicks on a number
numberBtns.forEach(button =>
    button.addEventListener('click', () => AddNumToDisplay(button.textContent)));

// In case user clicks on operator
operatorBtns.forEach(button =>
    button.addEventListener('click', () => SetOperator(button.textContent)));



//
// Impl of CallBacks

// Populate the current display with the corresponding number.
function AddNumToDisplay(digit_) {

    // Clear screen before adding digits to the number
    if (currDis.textContent == '0') {
        currDis.textContent = ''
    }

    currDis.textContent += digit_;
}


// Populate the history display with the corresponding operator
function SetOperator(operator_) {

    // Do not react if screen is empty
    if (currDis.textContent == '0') {
        return;
    }

    // In case history line is occupied
    if (historyDis.textContent != '') {
        Evaluate();
    }
    
    historyDis.textContent = `${currDis.textContent} ${operator_} `
    // Clean the current display
    currDis.textContent = ''
}


function Evaluate() {
    
    // Convert history display line to an array
    historyLine = historyDis.textContent.split(' ');

    // Stop calculation in case evaluation already occurred
    if (historyLine[0] === '' || historyLine.find(element => element === '=')) {
        return;
    }

    // Init variables as two operands and operator
    firstNum = historyLine[0];
    secondNum = currDis.textContent;
    currOperation = historyLine[1];

    // Check division in 0
    if ('0' === secondNum && '/' === currOperation) {
        currDis.textContent = 'Infinity';
        historyDis.textContent += `${secondNum} =`
    }

    result = RoundResult(operate(firstNum, secondNum, currOperation));

    // Update the display screens
    currDis.textContent = result;
    historyDis.textContent += `${secondNum} =`
}

function ClearAllScreen() {
    historyDis.textContent = '';
    currDis.textContent = '0';
}

function DeleteDigit() {
    let str = currDis.textContent;
    currDis.textContent = str.slice(0, -1);
}

function Negation() {
    currDis.textContent *= -1;
}

function ToFloat() {
    // Check if decimal point already exists
    if (currDis.textContent.includes('.')) {
        return;
    }

    currDis.textContent += '.';
}


//
// Utility Functions
function RoundResult(num_) {
    return Math.round(num_ * 1000) / 1000;
}


//
// Calculation Functions

// Basic Calculator operators 
function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function negative(a) {
    return a * -1;
}


// Call one of the above functions on 2 numbers
function operate(num1_, num2_, operator_) {

    const num1 = Number(num1_);
    const num2 = Number(num2_);
    
    switch (operator_) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            if (num2_ === 0) {
                return null;
            }
            return divide(num1, num2);
        default:
            return null;
    }
}