// A function that returns a random boolean
function getRandomBoolean(): boolean {

    // Generates a random number and checks if its greater than 0.5 then returns a boolean
    let randomBoolean = Math.random() > 0.5;
    return randomBoolean;
    
}

console.log(getRandomBoolean());   // Invoke the function and log it