

let operator = '';
let previousValue = '';
let currentValue = '';

function operate () {
 
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
    if (operator == '') {
        handleOperator(e.target.textContent);
        previousOperation.textContent = previousValue + " " + operator;
        currentOperation.textContent = currentValue;
    } else if (operator != '') {
        operate();
        previousOperation.textContent = '';
        currentOperation.textContent = previousValue;
        operator = '';
        handleOperator(e.target.textContent);
        previousOperation.textContent = previousValue + " " + operator;
        currentOperation.textContent = currentValue;
    }  
    
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

equalBtn.addEventListener('click', () => {
    if (previousValue != '' && currentValue != '') {
        operate();
        previousOperation.textContent = '';
        currentOperation.textContent = roundNum(previousValue);
        
        operator = '';
        previousValue = '';
    }
});

clearBtn.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    currentOperation.textContent = currentValue;
    previousOperation.textContent = previousValue;
});

function roundNum(num) {
    if (num % 1 != 0) {
        let roundedNum = Math.round(num * 1000) / 1000;
        return roundedNum;
    } else {
        return num;
    }
};