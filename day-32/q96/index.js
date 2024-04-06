// An Array of numbers
var numbers = [1, 2, 3, 4, 5, 6];
// Sum of all numbers with reduce() method which iterates over each element in the array by adding them together
var sum = numbers.reduce(function (acc, curr) { return acc += curr; }, 0); // 0 = initial value of accumulator
console.log(sum);
