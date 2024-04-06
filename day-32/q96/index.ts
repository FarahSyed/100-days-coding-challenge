// An Array of numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6];

// Sum of all numbers with reduce() method which iterates over each element in the array by adding them together
const sum: number = numbers.reduce((acc, curr): number => acc += curr, 0);  // 0 = initial value of accumulator

console.log(sum);