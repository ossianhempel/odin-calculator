function addition (...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};

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



function operate (operator, n1, n2) {
    // --------THIS WAS BEFORE USING EVENTLISTENERS!-------
    // let input = prompt('> ');

    // flatInput = input.split(' ').join('');

    // const operator = flatInput[1];
    // let n1 = parseInt(flatInput[0]);
    // let n2 = parseInt(flatInput[2]);


    if (operator == '+') {
        return addition(n1, n2 = 0);
    } else if (operator == '-') {
        return subtraction(n1, n2);
    } else if (operator == '*') {
        return multiplication(n1, n2);
    } else {
        return division(n1, n2);
    }
}

const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clearBtn');
const previousOperations = document.querySelector('.operations');
const currentOperations = document.querySelector('.outcome');


const buttons = document.querySelectorAll('.numpad, .operator');
buttons.forEach(button => button.addEventListener('click', () => {
    
    

    if (
            button.textContent != '+' &&
            button.textContent != '-' &&
            button.textContent != '*' &&
            button.textContent != '/' &&
            button.textContent != '='
        ) {
            currentOperations.textContent += button.textContent;
        } else if (
            button.textContent == '+' ||
            button.textContent == '-' ||
            button.textContent == '*' ||
            button.textContent == '/'
        ) {
            previousOperations.textContent += currentOperations.textContent + button.textContent;
            let operator = button.textContent;
            let n1 = previousOperations.textContent;
            let n2 = currentOperations.textContent;
            currentOperations.textContent = operate(operator, n1, n2);

        };
    
}));

// The clear button
clearBtn.addEventListener('click', () => {
    currentOperations.textContent = '';
    previousOperations.textContent = '';
});
