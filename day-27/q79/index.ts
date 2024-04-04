// An interface for a car object
interface Car {
    make: string;
    model: string;
    year: number;
}

// An object with properties specified by the Car interface
const carObj: Car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
}

console.log(carObj.model);      // Access through dot notation
console.log(carObj['model']);   // Access through bracket notation