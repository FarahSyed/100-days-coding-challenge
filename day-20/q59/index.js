// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Partially Applied Function (a function that is invoked partially) is a common use of currying
// Making a magic box that adds 5
var addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
// ------------------------------ OR ------------------------------
// Refactored the above function into one-liner arrow function (A shorthand for currying)
var adder = function (num1) { return function (num2) { return num1 + num2; }; };
console.log(adder(5)(10)); // A function with multiple invocations
