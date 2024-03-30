// Function that accepts two parameters
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    // Print the city with its country
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi"); // Invoked with an argument for city
describe_city("Ankara", "Turkey"); // Invoked with city and country arguments
describe_city("Tokyo", "Japan"); // Invoked with city and country arguments
