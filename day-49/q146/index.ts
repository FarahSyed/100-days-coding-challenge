// An array of numbers
const numArr: number[] = [1, 2, 3, 4, 5, 6];

// Filtering even numbers from the array
// Variable storing the result of filter method with a callback function
const evenNumbers: number[] = numArr.filter(ele => ele % 2 === 0);

// Log the evenNumbers
console.log(evenNumbers);