//  Storing values in the variables implicitly because TypeScript infers the type of a variable based on the initialiy assigned value.
let myName = "Farah";   
let fullDate = new Date();

// fullDate = fullDate.getDate();    // This line will throw an error as type number is not assignable to type Date
let currentDate = fullDate.getDate();    // To avoid the above error store type number in another variable

console.log(`Hi ${myName}, Today's date is ${currentDate}`);  //  Printing a message displaying current date