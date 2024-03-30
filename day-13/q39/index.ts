// Function that accepts two parameters
function city_country(city: string = "Karachi", country: string = "Pakistan") {
    return `${city}, ${country}`;
}

// Invoke function and print returned values
console.log(city_country());
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Madrid", "Spain"));