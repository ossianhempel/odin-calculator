function addition (...numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

console.log(addition(14, 7, 19));

