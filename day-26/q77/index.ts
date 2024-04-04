// A function that takes a string and returns a string
function greet(userName: string = "Anonymous"): string {
    // Greets the user using their name
    return `Hello ${userName}!`
}

console.log(greet("Simon"));    // It will greet Simon
console.log(greet());   // It will use Anonymous as no name is given