function addition (...numbers) {
    let result = 0;
    for (i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};

function subtraction (...numbers) {
    let result = 0;
    for (i = 0; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
};

function multiplication (...numbers) {
    let result = 1;
    for (i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
};

// This one only works with 2 numbers
function division (...numbers) {
    let result = numbers[0];
    for (i = 0; i <= numbers.length; i++) {
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
        return addition(n1, n2);
    } else if (operator == '-') {
        return subtraction(n1, n2);
    } else if (operator == '*') {
        return multiplication(n1, n2);
    } else {
        return division(n1, n2);
    }
}

const display = document.querySelector('.display');
const clear = document.querySelector('#clearBtn');

n1 = document.createElement('span');
n1.classList.add("n1");
display.appendChild(n1);

operator = document.createElement('span');
operator.classList.add("operator");
display.appendChild(operator);

n2 = document.createElement('span');
n2.classList.add("n2");
display.appendChild(n2);

outcome = document.createElement('span');
outcome.classList.add("outcome");
display.appendChild(outcome);


const buttons = document.querySelectorAll('.numpad, .operator');

buttons.forEach(button => button.addEventListener('click', () => {
    // testing if buttons respond
    console.log('this button works')
    
    
    if (
        button.textContent != '+' &&
        button.textContent != '-' &&
        button.textContent != '*' &&
        button.textContent != '/' &&
        button.textContent != '=' &&
        operator.textContent == false
    ) {
        n1.append(button.textContent);

    } else if (
        button.textContent == '+' ||
        button.textContent == '-' ||
        button.textContent == '*' ||
        button.textContent == '/'
    ) {
        operator.append(button.textContent);
    
    } else if (operator.textContent && 
        button.textContent != '+' &&
        button.textContent != '-' &&
        button.textContent != '*' &&
        button.textContent != '/' &&
        button.textContent != '='
    ) {
        n2.append(button.textContent);
    
    } else if (button.textContent == '=') {
        
        let n1Arg = +n1.textContent;
        let n2Arg = +n2.textContent;
        let operatorArg = operator.textContent;
        
        // console.log(operate(operatorArg, n1Arg, n2Arg));
        outcome.append('=', operate(operatorArg, n1Arg, n2Arg));
    }

}));
