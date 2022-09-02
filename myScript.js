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


console.log(division(8, 2));

