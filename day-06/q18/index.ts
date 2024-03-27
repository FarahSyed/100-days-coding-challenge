// Location stored in an array
let placesArr: string[] = ["Santorini", "Neelum Valley", "Kyoto", "The Colosseum", "Cape Town"];

// Print array in its original order
console.log("Original Array", placesArr);

// Print array alphabetical order without modifying the actual list
console.log("In alphabetical order", [...placesArr].sort());

// Show that the array is still in its original order
console.log("Original Array", placesArr);

// Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reversed alphabetical order", [...placesArr].sort().reverse());

// Show that the array is still in its original order
console.log("Original Array", placesArr);

// Reverse the order of your list
placesArr.reverse()
console.log("Reversed Array", placesArr);   // Show that its order has been changed

// Reverse the order of your list again
placesArr.reverse()
console.log("Original Array", placesArr);   // Show that its back to its original order

// Sort the array so it’s stored in alphabetical order.
placesArr.sort()
console.log("In alphabetical order", placesArr);

// Sort to change the array so it’s stored in reverse alphabetical order.
placesArr.reverse()
console.log("Reversed alphabetical order", placesArr);   // Show that its order has been changed