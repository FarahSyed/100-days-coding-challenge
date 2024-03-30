// Function that accepts two parameters
function describe_city(city: string, country: string = "Pakistan") {
    // Print the city with its country
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi");    // Invoked with an argument for city
describe_city("Ankara", "Turkey");    // Invoked with city and country arguments
describe_city("Tokyo", "Japan");    // Invoked with city and country arguments