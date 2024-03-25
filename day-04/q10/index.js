//  Storing values in the variables implicitly because TypeScript infers the type of a variable based on the initialiy assigned value.
var myName = "Farah";
var fullDate = new Date();
// fullDate = fullDate.getDate();    // This line will throw an error as type number is not assignable to type Date
var currentDate = fullDate.getDate(); // To avoid the above error store type number in another variable
console.log("Hi ".concat(myName, ", Today's date is ").concat(currentDate)); //  Printing a message displaying current date
