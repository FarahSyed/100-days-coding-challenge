// A Function that accepts two numbers and returns an object
var divide = function (dividend, divisor) {
    // Divide the given values
    var quotient = dividend / divisor;
    // Get the remainder of the given values
    var remainder = dividend % divisor;
    // Return an object
    return { quotient: quotient, remainder: remainder };
};
console.log(divide(12, 5));
