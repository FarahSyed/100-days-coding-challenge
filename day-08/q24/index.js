// Variable initialized
// Equality and inequality with strings
var userName = "John";
console.log(userName === "John");
console.log(userName !== "John");
// Using lower case function
var email = "john@email.com";
console.log(email === ("john@email.com").toLowerCase());
console.log(email === ("john@gmail.com").toLowerCase());
// Numerical tests involving equality and inequality
var number = 5;
console.log(number === 5);
console.log(number !== 5);
// Numerical tests involving greater than and less than
console.log(number > 3);
console.log(number < 5);
// Numerical tests involving greater than or equal to, and less than or equal to
console.log(number >= 5);
console.log(number <= 3);
// Tests using "and" and "or" operators
console.log(userName === "John" && email === "john@email.com");
console.log(userName === "Jane" || email === "john@gmail.com");
// Test whether an item is in an array or not
var arr = ["one", "two", "three"];
console.log(arr.includes("two"));
console.log(!arr.includes("two"));
