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



function operate () {
    let input = prompt('> ');

    flatInput = input.split(' ').join('');

    const operator = flatInput[1];
    let n1 = parseInt(flatInput[0]);
    let n2 = parseInt(flatInput[2]);


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


console.log(operate());