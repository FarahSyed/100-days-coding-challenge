// --------------------------- Nullable Types ---------------------------

let username: string | null = "David"; // The variable can hold a string or null
let ageEx: number | null = null; // The variable can hold a number or null

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Sam"); // Output: Hello, Sam!
greetUser(null);     // Output: Hello, Guest!