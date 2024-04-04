// An interface for a car object
interface Car {
    make: string;
    model: string;
    year: number;
    color?: string;
}

// An object with properties specified by the Car interface
const car: Car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
}

car.color = "Black";    // Add a property named color
car.year = 2021;        // Update the year property to 2021
console.log(car);    // Log the updates object