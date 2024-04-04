// A function that takes a string and returns a string
function greet(userName) {
    if (userName === void 0) { userName = "Anonymous"; }
    // Greets the user using their name
    return "Hello ".concat(userName, "!");
}
console.log(greet("Simon")); // It will greet Simon
console.log(greet()); // It will use Anonymous as no name is given
