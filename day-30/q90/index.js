// A function that returns a random number
function generateRandomNumber() {
    // Generates a random number between 1 - 10 inclusive
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber;
}
console.log(generateRandomNumber());
// A function that returns a boolean
function checkNaN(value) {
    // Checks if the value is NaN - Not a Number
    return isNaN(value);
}
console.log(checkNaN(NaN));
