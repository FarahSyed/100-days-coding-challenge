// A function that takes a number returns a boolean
function isLeapYear(year) {
    // Check if the year is evenly divisible by 4 AND is not evenly divisible by 100 
    // OR if it is evenly divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024)); // Invoke the function and log it
console.log(isLeapYear(2018));
