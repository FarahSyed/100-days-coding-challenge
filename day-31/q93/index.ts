// An Array of strings storing different fruits
const fruits: string[] = ["Cherry", "Banana", "Pineapple"];

// A variable storing the index of the element "Banana" from fruits Array
const index = fruits.indexOf("Banana");

// If index value is not -1 then update the array
if(index !== -1) fruits[index] = "Mango";   // -1 means element not present

console.log("Updated array:", fruits);