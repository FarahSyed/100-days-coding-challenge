"use strict";
// --------------------------- Nullable Types ---------------------------
let username = "David"; // The variable can hold a string or null
let ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Sam"); // Output: Hello, Sam!
greetUser(null); // Output: Hello, Guest!
