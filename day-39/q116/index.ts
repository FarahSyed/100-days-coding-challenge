// Get current month in number
const month = new Date().getMonth();

// Decide the season based on the current month and log it
switch (month) {
    case 0:  // 0 represents January
    case 1:
    case 11:
        console.log('Winter');
        break;
    case 2:
    case 3:
    case 4:
        console.log('Spring');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
        console.log('Autumn');
        break;
    default:
        console.log("Invalid Month");
        break;
}