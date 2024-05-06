# Day-67 Task:

## Description
Learn about TypeScript arrays by using the following guide and coding along with the examples provided in it:

[Type Annotations With Arrays in TypeScript](https://github.com/AsharibAli/100-days-of-code/blob/main/day-67/TS-Array/README.md)


## TypeScript Arrays:

## Type Annotations with Arrays
In TypeScript, type annotations can be applied to arrays to specify the types of elements that the array can contain. This helps in ensuring type safety and providing better clarity about the data structure being used.

### Example
```typescript
// Annotating an array of strings
let fruits: string[] = ["Pineapple", "Pear", "Peach"];

// Looping through each element of the Array
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(`Fruit: ${fruit}`);
}
```

In this example:

- We declare an array `fruits` with a type annotation `string[]`, indicating that it can only contain strings.
- The array is initialized with three string elements: "Pineapple", "Pear", and "Peach".
- We iterate over each element of the array using a `for` loop and log each fruit to the console.

Type annotations with arrays provide additional clarity and prevent unexpected data types from being assigned to the array elements, enhancing code maintainability and readability.


## Type Annotations with Multidimensional Arrays
Type annotations in TypeScript can also be used with multidimensional arrays to specify the types of elements within each dimension of the array.

### Example

```typescript
// Annotating arrays with different types
let arrayOne: string[] = ["A", "B", "C"];
let arrayTwo: number[] = [1, 2, 3];
let arrayThree: boolean[] = [true, false, true];

// Creating a multidimensional array with a union of string, number, and boolean types
let multidimensionalArray: (string | number | boolean)[][] = [arrayOne, arrayTwo, arrayThree];

// Iterating through the multidimensional array
for (let i = 0; i < multidimensionalArray.length; i++) {
    for (let j = 0; j < multidimensionalArray[i].length; j++) {
        const element = multidimensionalArray[i][j];
        console.log(`Element at position (${i}, ${j}): ${element}`);
    }
}
```

In this example:

- We declare three separate arrays arrayOne, arrayTwo, and arrayThree, each with different types (string[], number[], and boolean[] respectively).
- We create a multidimensionalArray with a type annotation (string | number | boolean)[][], indicating that it is an array of arrays where each inner array can contain elements of type string, number, or boolean.
- We iterate over each row and column of the multidimensional array using nested for loops and log the value of each element to the console.

Multidimensional arrays in JavaScript are a powerful way to represent and manipulate complex data structures, such as matrices, grids, and tables.