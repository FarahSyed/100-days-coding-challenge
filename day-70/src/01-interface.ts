// --------------------------- Introduction to Interface ---------------------------

// Interface defining structure for a person with 'name' (string) and 'age' (number).
interface Person1 {
    name: string,
    age: number,
}

// Initializing 'person1' object with name "Jane" and age 22.
const person1: Person1 = {
    name: "Jane",
    age: 22,
}

// Logging the 'person1' object.
console.log(person1);