// An Array of strings storing different fruits
const fruits: string[] = ["Mango", "Cherry", "Banana", "Pineapple"];

// A function that takes an array of strings
function removeLastElement(arr: string[]): string | undefined {
    // .pop() removes the last element from the array and returns it
    const lastElement = arr.pop();
    return lastElement;
}

console.log(removeLastElement(fruits));