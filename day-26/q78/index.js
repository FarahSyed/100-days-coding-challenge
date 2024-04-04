// Try to access both functions before initialization
// console.log(squareTheNo(3));    // Block-scoped variable 'squareTheNo' used before its declaration.
// console.log(squareTheNum(3));    // Accessible
// ------------------------------ Function Expression ------------------------------
var squareTheNo = function (num) {
    return Math.pow(num, num);
};
console.log(squareTheNo(3));
// Function expressions are:
// Not Hoisted - Not accessible before declaration
// Anonymous Functions and can be assigned to a variable
// ------------------------------ Function Declaration ------------------------------
function squareTheNum(num) {
    return Math.pow(num, num);
}
console.log(squareTheNum(3));
// Function declarations are:
// Hoisted - Accessible before declaration
// Named Functions
