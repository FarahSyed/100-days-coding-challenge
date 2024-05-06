"use strict";
// --------------------------- Type Annotations with Multidimensional Arrays ---------------------------
let arrayOne = ["A", "B", "C"];
let arrayTwo = [1, 2, 3];
let arrayThree = [true, false, true];
// Creating a multidimensional array with a union of string, number, and boolean types
let multidimensionalArray = [arrayOne, arrayTwo, arrayThree];
console.log("Multidimensional Array", multidimensionalArray);
for (let i = 0; i < multidimensionalArray.length; i++) {
    for (let j = 0; j < multidimensionalArray.length; j++) {
        const element = multidimensionalArray[i][j];
        console.log(`Element at position (${i}, ${j}): ${element}`);
    }
}
