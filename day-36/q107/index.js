// Function that checks divisiblity of a number and returns a boolean
function isDivisibleBy2And3(num) {
    // Checks if the given number is divisible by 2 & 3
    var bool = num % 2 === 0 && num % 3 === 0;
    return bool;
}
console.log(isDivisibleBy2And3(12));
