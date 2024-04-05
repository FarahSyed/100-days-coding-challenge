// A function that takes a string
function changeCases(str: string) {

    const upperCase = str.toUpperCase();    // Converts to uppercase
    const lowerCase = str.toLowerCase();    // Converts to lowercase
    
    // Logs both cases
    console.log("Uppercase:", upperCase);
    console.log("Lowercase:", lowerCase);
}

changeCases("Sunrise");