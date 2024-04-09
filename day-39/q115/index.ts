// Get today's weekday in number
const todaysWeekdaysNum: number = new Date().getDay();

// Decide today's weekday based on the current weekday's number and log it
switch (todaysWeekdaysNum) {
    case 0:   // 0 represents Sunday
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}