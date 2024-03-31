// Function receiving an array of items in one parameter using rest operator
function sandwich (...items: string[]) {
    console.log(`The sandwich will include: ${items.join(', ')}`);
}

// Function invocation with as many arguments as needed
sandwich("Lettuce");
sandwich("Tomatoes", "Onions");
sandwich("Avocado", "Olives", "Pepper");