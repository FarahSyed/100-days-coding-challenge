// An array of numbers
var numArr = [1, 2, 3, 4, 5, 6];
// Filtering even numbers from the array
// Variable storing the result of filter method with a callback function
var evenNumbers = numArr.filter(function (ele) { return ele % 2 === 0; });
// Log the evenNumbers
console.log(evenNumbers);
