// Function that returns the number of days left in the new year
function daysLeftInNewYear() {
    // Get the current date object
    var currentDate = new Date();
    // Get the new year's date object
    var newYear = new Date("".concat(currentDate.getFullYear() + 1));
    // Calculate the difference in milliseconds between newYear and currentDate
    var diffInMillisecs = newYear.getTime() - currentDate.getTime();
    // Calculate the difference in days from milliseconds
    var diffInDays = Math.floor(diffInMillisecs / (1000 * 60 * 60 * 24)); // Convert milliseconds to days (1000 * milliseconds * 60 seconds * 60 minutes * 24 hours)
    return diffInDays;
}
console.log(daysLeftInNewYear());
