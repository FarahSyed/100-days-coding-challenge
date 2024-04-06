// Function that accepts your birth date and month returns your next birthday
function getNextBirthday(month, date) {
    // Get the current date object
    var currentDate = new Date();
    // Get full year
    var year = currentDate.getFullYear();
    // Create a date object representing birthday
    var birthday = new Date(year, month - 1, date); // month - 1 as it starts with 0 index
    // If birthday has already passed this year set next year
    if (birthday < currentDate)
        birthday.setFullYear(year + 1);
    return birthday;
}
var nextBirthday = getNextBirthday(4, 14); // April, 14
// Convert the next birthday date to a localized date string to handle timezone discrepancies and ensure consistent behavior
console.log("Next birthday:", nextBirthday.toLocaleDateString());
// ------------------------- Date Handling with Different Formats -------------------------
// Date Creation with Potential Timezone Discrepancies
// For Example: birthday2 may return date 13 instead of 14
var birthday2 = new Date(2024, 3, 14); // 13   Parameters could equally be: (`April 14, 2024`)
// Preferred Method: Handling Timezone Discrepancies with UTC
// By using Date.UTC(), we expliciltly set the timezone to UTC, ensuring consistent behavior across different environments
var birthday3 = new Date(Date.UTC(2024, 3, 14));
// Alternatively, explicitly setting the time to 12 PM (noon) avoids timezone discrepancies
var birthday4 = new Date(2024, 3, 14, 12, 0, 0); // OR (`April 14, 2024 12:00:00`)
// Another Alternative: Date Creation from a Date String
// While creating a Date object from a date string is valid, it doesn't handle timezone discrepancies unless the timezone is explicitly specified.
var birthday5 = new Date("2024-04-14");
