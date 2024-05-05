// --------------------------- Optional and Default Parameter ---------------------------

// Optional Parameters
function greetOptional(name: string, age?: number) {
    if (age != undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greetOptional("Tom");   // Output: Hello, Tom! 
greetOptional("John", 20);   // Output: Hello, John! You are 20 years old.


// Default Parameters:
function greetDefault(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
  
greetDefault("Tom"); // Output: "Hello, Tom! You are 25 years old."
greetDefault("John", 20); // Output: "Hello, John! You are 30 years old."