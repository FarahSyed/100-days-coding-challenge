"use strict";
// --------------------------- Type Annotations ---------------------------
let myNumber = 42;
let myString = "Hello TypeScript!";
console.log("My Number is:", myNumber);
console.log("My String is:", myString);
// We can also write it this way:
let myNumberTwo;
let myStringTwo;
myNumberTwo = 42;
myStringTwo = "Hello TypeScript!";
console.log("My Number is:", myNumberTwo);
console.log("My String is:", myStringTwo);
// --------------------------- Dynamic Type Determination ---------------------------
let greeting = "Hello World!"; // TypeScript infers the type of the variable 'greeting' as 'string'
console.log(greeting);
// --------------------------- Any Type ---------------------------
let myVariable = 42; // TypeScript compiler disables type checking for the variable 'myVariable'
myVariable = "Hello TypeScript!";
console.log(myVariable);
// It is not recommended to use the 'any' type because:
// 1. It leads to loss of type safety.
// 2. It reduces code reliability
// 3. It introduces maintenance challenges
// 4. It interfers with tooling
