// Function that returns the number of days left in the new year
function daysLeftInNewYear(): number {
    
    // Get the current date object
    const currentDate = new Date();
    
    // Get the new year's date object
    const newYear = new Date(`${currentDate.getFullYear() + 1}`);
    
    // Calculate the difference in milliseconds between newYear and currentDate
    const diffInMillisecs = newYear.getTime() - currentDate.getTime();
    
    // Calculate the difference in days from milliseconds
    const diffInDays = Math.floor(diffInMillisecs / (1000 * 60 * 60 * 24));  // Convert milliseconds to days (1000 * milliseconds * 60 seconds * 60 minutes * 24 hours)
    return diffInDays;
}


console.log(daysLeftInNewYear());