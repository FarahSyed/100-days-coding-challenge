// An arrow function an arrow function that takes multiple parameters and returns the product of all parameters
const calcProduct = (...numbers: number[]): number => numbers.reduce((total, curr) => total * curr, 1);

console.log(calcProduct(1, 2, 3, 4, 5, 6, 7));