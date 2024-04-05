// A function that returns a random number
function generateRandomNumber(): number {
    
    // Generates a random number between 1 - 10 inclusive
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber;
}

console.log(generateRandomNumber());


// A function that returns a boolean
function checkNaN(value): boolean {
    
    // Checks if the value is NaN - Not a Number
    return isNaN(value);
}

console.log(checkNaN(NaN));