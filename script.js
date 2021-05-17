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

// Call one of the above functions on 2 numbers
function operate(num1, num2) {
    switch (true) {
        case 'add':
            add(num1, num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
        case 'multiply':
            multiply(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
    } 
}

// Populate The Display with digits when clicked
window.addEventListener('click', populateDisplay);

function populateDisplay(e) {
    switch(e.target.id) {
        case 'one':
            addDigitToDisplay(1);
            break;
        case 'two':
            addDigitToDisplay(2);
            break;
        case 'three':
            addDigitToDisplay(3);
            break;
        case 'four':
            addDigitToDisplay(4);
            break;
        case 'five':
            addDigitToDisplay(5);
            break;
        case 'six':
            addDigitToDisplay(6);
            break;
        case 'seven':
            addDigitToDisplay(7);
            break;
        case 'eight':
            addDigitToDisplay(8);
            break;
        case 'nine':
            addDigitToDisplay(9);
            break;
        case 'zero':
            addDigitToDisplay(0);
            break;
        case 'period':
            addDigitToDisplay('.');
            break;
        case 'add':
            addDigitToDisplay('+');
            break;
        case 'subtract':
            addDigitToDisplay('-');
            break;
        case 'multiply':
            addDigitToDisplay('*');
            break;
        case 'divide':
            addDigitToDisplay('/');
            break;
    }
    // return value
}

// Add text to display
const display = document.querySelector('.display');

function addDigitToDisplay(digit) {
    display.appendChild(document.createTextNode(digit));
}

