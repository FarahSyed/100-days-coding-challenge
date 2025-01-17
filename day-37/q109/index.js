// Function that returns a string to greet the user based on their time
function greetTheUser() {
    // Get current date object
    var currentDate = new Date();
    // Extract current hour
    var currentHour = currentDate.getHours();
    // Initialize a variable with an initial message
    var greeting = "Hi, have a good day";
    // Determines the greeting based on the current time
    if (currentHour >= 0 && currentHour < 12) {
        greeting = "Good Morning";
    }
    else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good Afternoon";
    }
    else if (currentHour >= 17 && currentHour < 21) {
        greeting = "Good Evening";
    }
    else if (currentHour >= 21 && currentHour < 24) {
        greeting = "Good Night";
    }
    return greeting;
}
console.log(greetTheUser()); // Invoke the function and log it
