// Function accepting an object
function showProps(car: object) {
    // Loops through the object and logs its properties
    for (const key in car) {
        console.log(`${key}: ${car[key]}`);
    }
}

// Car object
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
    color: "Black",
}

showProps(car);    // Function invocation with an object as argument