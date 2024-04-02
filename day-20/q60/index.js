// An Anoymous function stored in userProfile variable
var userProfile = (function () {
    var name = "Sam";
    var age = 28;
    // Returns an object having a method displayInfo
    return {
        displayInfo: function () {
            return console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
}()); // Immediately invoked function
// Call the displayInfo method of the userProfile object.
userProfile.displayInfo();
