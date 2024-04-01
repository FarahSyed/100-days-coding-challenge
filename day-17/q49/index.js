// Function that takes a rest parameter
function myHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // Loop through the array and print a statement for each hobby
    hobbies.forEach(function (hobby) { return console.log("I enjoy ".concat(hobby)); });
}
// Function invocation with 4 arguments
myHobbies("coding", "cycling", "traveling", "learning about new technologies");
