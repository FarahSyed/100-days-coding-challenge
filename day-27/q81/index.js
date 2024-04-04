// Function accepting an object
function showProps(car) {
    // Loops through the object and logs its properties
    for (var key in car) {
        console.log("".concat(key, ": ").concat(car[key]));
    }
}
// Car object
var car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
    color: "Black",
};
showProps(car); // Function invocation with an object as argument
