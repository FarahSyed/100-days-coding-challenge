// Let keyword variable
let userName = "Sam";
// let userName;        // Cannot be redeclared
userName = "Mike";   // Can be reinitialized/reassigned


// Const keyword variable
const myName = "Sam";
// const myName;       // Cannot be redeclared

try {
    myName = "Mike";    // Cannot be reinitialized/reassigned
} catch (error) {
    console.log(error);
}