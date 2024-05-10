// --------------------------- Interface Method and Parameters ---------------------------

// Interface for a person with 'name' and 'age' properties, and a 'greet' method that takes a message parameter and returns void.
interface Person2 {
    name: string;
    age: number;
    greet(message: string): void;
}

// Initializing 'person2' object with name "Claire" and age 34, along with a 'greet' method implementation.
const person2: Person2 = {
    name: "Claire",
    age: 34,
    greet(message: string) {
        console.log(`${this.name} says: ${message}`);
    },
}

// Invoking the 'greet' method of 'person2' with the message "Hi, there".
person2.greet("Hi, there");