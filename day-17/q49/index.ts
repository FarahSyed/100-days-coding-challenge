// Function that takes a rest parameter
function myHobbies (...hobbies:string[]) {
    // Loop through the array and print a statement for each hobby
    hobbies.forEach(hobby => console.log(`I enjoy ${hobby}`));
}

// Function invocation with 4 arguments
myHobbies("coding", "cycling", "traveling", "learning about new technologies");