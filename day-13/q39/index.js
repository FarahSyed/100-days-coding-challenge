// Function that accepts two parameters
function city_country(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, ", ").concat(country);
}
// Invoke function and print returned values
console.log(city_country());
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Madrid", "Spain"));
