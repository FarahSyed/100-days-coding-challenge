// A function that accepts a rest param
function calculateAverage() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Calculate the sum of all the elements in the array 
    // Then divide the sum by the length of the array 
    // Then round the answer
    var average = Math.round(scores.reduce(function (total, score) { return total += score; }, 0) / scores.length); // 0 is the initial value of total/totalumulator and score is the current value of the element
    return average;
}
// Log the average
console.log(calculateAverage(1, 2, 4, 8, 16));
