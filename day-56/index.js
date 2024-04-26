// Task 1: The postfix and prefix forms
// What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;

// Answer: Final values of all variables:
// let c = ++a; // c = 2, a = 2
// let d = b++; // d = 1, b = 2


// Task 2: Assignment result
// What are the values of a and x after the code below?

// let a = 2;
// let x = 1 + (a *= 2);

// Answer:
// a = 4, x = 5


// Task 3: Type conversions
// What are results of these expressions?

// Answers:
// "" + 1 + 0       // "10"
// "" - 1 + 0       // -1
// true + false     // 1
// 6 / "3"          // 2
// "2" * "3"        // 6
// 4 + 5 + "px"     // "9px"
// "$" + 4 + 5      // "$45"
// "4" - 2          // 2
// "4px" - 2        // NaN
// "  -9  " + 5     // "  -9  5"
// "  -9  " - 5     // -14
// null + 1         // 1
// undefined + 1    // NaN
// " \t \n" - 2     // -2


// Task 4: Fix the addition
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// Answer: Add a unary+ operator before performing addtion
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 3