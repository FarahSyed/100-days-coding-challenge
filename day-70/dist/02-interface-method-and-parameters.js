"use strict";
// --------------------------- Interface Method and Parameters ---------------------------
// Initializing 'person2' object with name "Claire" and age 34, along with a 'greet' method implementation.
const person2 = {
    name: "Claire",
    age: 34,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    },
};
// Invoking the 'greet' method of 'person2' with the message "Hi, there".
person2.greet("Hi, there");
