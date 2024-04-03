// A block scope
{
    var userName = "Hannah";
    var pi = 3.142;
    // Both are accessible inside the block
    console.log("Inside block - let", userName);
    console.log("Inside block - const", pi);
}
// Both are not accessible outside the block {} and will throw an error
console.log("Outside block - let", userName);
console.log("Outside block - const", pi);
// Variables declared with "let" and "const" keywords are Block Scoped variables
