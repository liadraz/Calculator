
//
// Variables Definitions
let firstOper = '';
let secondOper = '';
let currOperation = null;

//
// Query selector divs
const numberBtns = document.querySelectorAll('.data-number');
const operatorsBtns = document.querySelectorAll('.data-operator');
const equalBtn = document.getElementById('equal');
const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const pointBtn = document.getElementById('point');
const negativeBtn = document.getElementById('negative');
const display = document.querySelector('.display');

//
// Even Handling
window.addEventListener('click', populateDisplay)


//
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


//
// Call one of the above functions on 2 numbers
function operate(num1_, num2_, operator_) {

    const num1 = Number(num1_);
    const num2 = Number(num2_);
    
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
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


// Populate the calculator display with the corresponded button value
function populateDisplay(e) {

    let selection = e.target.textContent;

    // In case user clicks on number
    if (selection >= '0' && selection <= '9') {
        addDigitToDisplay(selection);
    }
    // In case user clicks on operator
    else if (selection === '+' || selection === '-' || selection === 'X' || selection === '/') {
        console.log(selection);
    }
    
}


function addDigitToDisplay(digit) {
    display.textContent += digit
}

