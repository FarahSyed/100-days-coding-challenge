// Function receiving 2 params and an optional rest parameter
function carDetails(manufacturer: string, modelName: string, ...rest: [string, unknown][]) {
    
    // Store the 2 params in an object
    let carObj = {
        manufacturer,
        modelName,
    }

    // Store the rest of the parameters in the same object
    rest.forEach(([key, val]) => {
        carObj[key] = val;
    });
    
    return carObj;
}

console.log(carDetails("Volkswagen", "ID.4"));
console.log(carDetails("Toyota", "bZ4X"));
console.log(carDetails("Stellantis", "Peugeot 308", ["colors", "Blue, Red, Black, Grey"], ["year", 2022]));