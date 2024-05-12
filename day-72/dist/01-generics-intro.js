"use strict";
// --------------------------- Generics Intro ---------------------------
// A generic function that takes a type as input and returns the type as output
function returnType(params) {
    return params;
}
// Usage of the generic function as return type
const numVal = returnType(9);
const strVal = returnType("Hi");
const boolVal = returnType(true);
const arrNumVal = returnType([4, 6, 7]);
console.log(`Number Value: ${numVal}`);
console.log(`String Value: ${strVal}`);
console.log(`Boolean Value: ${boolVal}`);
console.log(`Array Value: ${arrNumVal}`);
