// An Anoymous function stored in userProfile variable
const userProfile = (function () {
    
    const name = "Sam";
    const age = 28;
    
    // Returns an object having a method displayInfo
    return {
        displayInfo: function() {
            return console.log(`Name: ${name}, Age: ${age}`);
        },
    }
}());   // Immediately invoked function

// Call the displayInfo method of the userProfile object.
userProfile.displayInfo();