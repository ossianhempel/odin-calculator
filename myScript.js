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

console.log(subtraction(14, 7, 19));

