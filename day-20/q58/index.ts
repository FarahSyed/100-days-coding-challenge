// A function that accepts a rest param
function calculateAverage(...scores:number[]) {
    // Calculate the sum of all the elements in the array 
    // Then divide the sum by the length of the array 
    // Then round the answer
    const average = Math.round(scores.reduce((total: number, score: number) => total += score, 0) / scores.length);  // 0 is the initial value of total/totalumulator and score is the current value of the element
    return average;
}

// Log the average
console.log(calculateAverage(1, 2, 4, 8, 16));