// --------------------------- Type Annotations with Multidimensional Arrays ---------------------------

// Annotating arrays with different types
let arrayOne: string[] = ["A", "B", "C"];
let arrayTwo: number[] = [1, 2, 3];
let arrayThree: boolean[] = [true, false, true];

// Creating a multidimensional array with a union of string, number, and boolean types
let multidimensionalArray: (string | number | boolean)[][] = [arrayOne, arrayTwo, arrayThree];
console.log("Multidimensional Array", multidimensionalArray);

// Iterating through the multidimensional array
for (let i = 0; i < multidimensionalArray.length; i++) {
    for (let j = 0; j < multidimensionalArray.length; j++) {
        const element = multidimensionalArray[i][j];
        console.log(`Element at position (${i}, ${j}): ${element}`);
    }
}