// Two arrays containing different prices
const prices1 = [2000, 3000, 4000];
const prices2 = [4500, 2500, 3500];

// Copy the 2 arrays in another array
let allPrices = [...prices1, ...prices2];

// Sort the array in ascending order
allPrices.sort();

console.log(allPrices);    // Log the result