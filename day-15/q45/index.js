// Function receiving 2 params and an optional rest parameter
function carDetails(manufacturer, modelName) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    // Store the 2 params in an object
    var carObj = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Store the rest of the parameters in the same object
    rest.forEach(function (_a) {
        var key = _a[0], val = _a[1];
        carObj[key] = val;
    });
    return carObj;
}
console.log(carDetails("Volkswagen", "ID.4"));
console.log(carDetails("Toyota", "bZ4X"));
console.log(carDetails("Stellantis", "Peugeot 308", ["colors", "Blue, Red, Black, Grey"], ["year", 2022]));
