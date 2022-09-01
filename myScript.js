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

console.log(multiplication(8, 8, 2));

