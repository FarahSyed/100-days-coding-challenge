"use strict";
// --------------------------- Type Annotations with Objects ---------------------------
let personOne;
personOne = {
    name: "Sakura Tanaka",
    age: 30,
    jobTitle: "Software Engineer",
    adress: {
        street: "1-6-1 Ebisu",
        city: "Tokyo",
    },
};
console.log("Person One", personOne);
// Alternatively, declaring and initializing an object with type annotations in a single statement
let personTwo = {
    name: "Haruto Yamamoto",
    age: 30,
    jobTitle: "Software Engineer",
    adress: {
        street: "1-5-1 Ebisu",
        city: "Tokyo",
    },
};
console.log("Person Two", personTwo);
