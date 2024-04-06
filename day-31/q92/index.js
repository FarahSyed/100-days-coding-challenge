// An Array of strings storing different fruits
var fruits = ["Mango", "Cherry", "Banana", "Pineapple"];
// A function that takes an array of strings
function removeLastElement(arr) {
    // .pop() removes the last element from the array and returns it
    var lastElement = arr.pop();
    return lastElement;
}
console.log(removeLastElement(fruits));
