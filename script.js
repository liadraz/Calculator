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
function operate(num1, num2, operator) {
    const parceNum1 = parseInt(num1);
    const parceNum2 = parseInt(num2);
    let result = 0;
    switch (operator) {
        case '+':
            result = add(parceNum1, parceNum2);
            break;
        case '-':
            result = subtract(parceNum1, parceNum2);
            break;
        case '*':
            result = multiply(parceNum1, parceNum2);
            break;
        case '/':
            result = divide(parceNum1, parceNum2);
            break;
    }
    console.log(result);
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
    console.log(display.textContent);
}

// Add text to display
const display = document.querySelector('.display');

function addDigitToDisplay(digit) {
    display.appendChild(document.createTextNode(digit));
}


// Step 5...
    // if operator is pressed 
        // save num 1
        // save operation - add/divide/subtruct/multiply 
    // save num 2

    // if user prees =
        // operate(num1, num2) with the given operator
        // update the display with the solution

// Show the Calculation on the display
const equalSign = document.querySelector('#equal');
equalSign.addEventListener('click', calculate);

function calculate() {
    const arr = display.textContent.split('');
    operate(arr[0], arr[2], arr[1]);
}