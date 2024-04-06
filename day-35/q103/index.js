// A function that returns a random boolean
function getRandomBoolean() {
    // Generates a random number and checks if its greater than 0.5 then returns a boolean
    var randomBoolean = Math.random() > 0.5;
    return randomBoolean;
}
console.log(getRandomBoolean()); // Invoke the function and log it
