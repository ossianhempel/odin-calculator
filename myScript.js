// function addition (...numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return result;
// };

function addition (x, y) {
    let result = +x + +y;
    return result;
}

// IN PROGRESSS!!! 
function subtraction (...numbers) {
    let result = numbers[0];
    console.log(numbers[0], numbers[1]);
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
};

function multiplication (...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
};

// This one only works with 2 numbers
function division (...numbers) {
    let result = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
        result = numbers[0] / numbers[1];
    }
    return result;
};

let operator = '';
let previousValue = '';
let currentValue = '';

function operate () {
    // if (operator == '+') {
    //     return addition(n1, n2);
    // } else if (operator == '-') {
    //     return subtraction(n1, n2);
    // } else if (operator == '*') {
    //     return multiplication(n1, n2);
    // } else {
    //     return division(n1, n2);
    // }
    previousValue = +previousValue;
    currentValue = +currentValue;

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === '*') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
    currentValue = previousValue;
}

// ----Getting all our buttons ready----
const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clear-btn');
const equalBtn = document.querySelector('.equal');
const decimalBtn = document.querySelector('.decimal');

const numbers = document.querySelectorAll('.numpad');
const operators = document.querySelectorAll('.operator');

const previousOperation = document.querySelector('.previous-value');
const currentOperation = document.querySelector('.current-value');


numbers.forEach(number => number.addEventListener('click', () => {
    handleNumber(number.textContent);
    currentOperation.textContent = currentValue;
}));

operators.forEach((op => op.addEventListener('click', function(e) {
    handleOperator(e.target.textContent);
    previousOperation.textContent = previousValue + " " + operator;
    currentOperation.textContent = currentValue;
})));

function handleNumber(num) {
    if(currentValue.length <= 5) {
        currentValue += num;
    };
};

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';

};

clearBtn.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    currentOperation.textContent = currentValue;
    previousOperation.textContent = previousValue;
});


equalBtn.addEventListener('click', () => {
    operate();
    previousOperation.textContent = '';
    currentOperation.textContent = previousValue;
});