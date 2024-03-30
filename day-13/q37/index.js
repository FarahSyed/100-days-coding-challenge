// Function that accepts two parameters
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    // Print the size with message
    console.log("The shirt size is ".concat(size, " and its text is \"").concat(text, "\"."));
}
make_shirt(); // Invoked with default size and message
make_shirt("Medium"); // Invoked with medium size and default message
make_shirt("Small", "Stop Genocide!"); // Invoked with small size and a message
