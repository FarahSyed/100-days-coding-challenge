// A function that takes a number and returns a rounded number
function roundTheNumber(num: number): number {
    // Rounds the given number
    return parseFloat(num.toFixed(2));
}

console.log(roundTheNumber(3.14159));