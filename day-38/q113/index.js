// Initialize an empty Map object
var countriesCapitals = new Map();
// Set 3 entries in the Map
countriesCapitals.set("Japan", "Tokyo");
countriesCapitals.set("Canada", "Toronto");
countriesCapitals.set("Australia", "Sydney");
// Function that checks if a given map contains a specific key and returns its value(string) if found, otherwise returns undefined
function logCapital(countriesCaps) {
    // Checks if map has "Canada" then return its capital
    if (countriesCaps.has("Canada")) {
        return countriesCaps.get("Canada");
    }
}
console.log(logCapital(countriesCapitals));
