// An array storing grades
var grades = [78, 42, 57, 63, 85, 76, 97];
// Calculate the sum of all the elements in the array 
// Then divide the sum by the length of the array 
// Then round the answer
var average = Math.round(grades.reduce(function (acc, curr) { return acc += curr; }, 0) / grades.length); // 0 is the initial value of acc/accumulator and curr is the current value of the element
// Log the average
console.log(average);
