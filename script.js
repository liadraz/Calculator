let buttonsGrid = document.querySelector('.allButtons'); 

// Basic operators 
function add(a, b) {
    return (a + b);
}

function subtrat(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}


/* function operate(num1, num2) {
    switch (true) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    } 
} */

// Create Buttons Grid
function createDigitsGrid() {
    buttonsGrid.classList.add('grid');
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
            createButton();
        }
    }
}

// Create one button
function createButton() {
    let button = document.createElement('button');
    button.classList.add('button');
    buttonsGrid.appendChild(button);
}

createButton()

