// Function receiving an array of items in one parameter using rest operator
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("The sandwich will include: ".concat(items.join(', ')));
}
// Function invocation with as many arguments as needed
sandwich("Lettuce");
sandwich("Tomatoes", "Onions");
sandwich("Avocado", "Olives", "Pepper");
