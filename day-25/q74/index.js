// Variables declared and assigned
var a = 5;
var b = 10;
console.log("Before Swapping");
console.log("a", a);
console.log("b", b);
// Swap values
var temp = a;
a = b;
b = temp;
// [a, b] = [b, a];    // Or Swap using destructuring
console.log("After Swapping");
console.log("a", a);
console.log("b", b);
