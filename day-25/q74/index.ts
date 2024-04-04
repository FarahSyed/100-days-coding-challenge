// Variables declared and assigned
let a = 5;
let b = 10;
console.log("Before Swapping");
console.log("a", a);
console.log("b", b);

// Swap values
let temp = a;
a = b;
b = temp;

// [a, b] = [b, a];    // Or Swap using destructuring

console.log("After Swapping");
console.log("a", a);
console.log("b", b);