// A Function that accepts two decimal numbers and returns a number
const multiplyDecimals = (val1: number, val2: number): number => {
    
    // First (val1 * val2) will be multiplied
    // .toFixed(2) will round the multiplied value to two decimal places and converts it to string
    // .parseFloat() parses a string and returns the first number
    // const result = parseFloat((val1 * val2).toFixed(2));
    
    // OR
    // * 100 shifts the decimal point two places to the right
    // Math.round() rounds the given number to the nearest integer
    // Rounded value / 100 shifts the decimal point two places to the left which gives a rounded number with two decimal places
    const result = Math.round(val1 * val2 * 100) / 100;
    return result;
}

console.log(multiplyDecimals(4.5, 2.3));