// Task 1: What's the result of OR?
// What is the code below going to output?
alert( null || 2 || undefined );   // alerts 2 as it is the first truthy value


// Task 2: What's the result of OR'ed alerts?
// What will the code below output?
alert( alert(1) || 2 || alert(3) );    // alerts 1 then 2, as alert(1) returns undefined and 2 is the first truthy value


// Task 3: What is the result of AND?
// What is this code going to show?
alert( 1 && null && 2 );    // alerts null as it the first falsy value


// Task 4: What is the result of AND'ed alerts?
// What will this code show?
alert( alert(1) && alert(2) );   // alerts 1 and call to alert returns undefined and it is the first falsy value so it stops there


// Task 5: The result of OR AND OR
// What will the result be?
alert( null || 2 && 3 || 4 );   // 3 as && has higher precedence than || so it executes first 2 && 3 = 3 then 3 is the first truthy value


// Task 6: Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
if (age >= 14 && age <= 90) 


// Task 7: Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)


// Task 8: A question about "if"
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) alert( 'first' );    // Executes because -1 is truthy making the condition true
if (-1 && 0) alert( 'second' );    // Doesn't execute because (-1 && 0) evaluates to 0, which is falsy, making the entire condition false
if (null || -1 && 1) alert( 'third' );    // Executes as 1 is truthy making the condition true


// Task 9: Check the login
// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema:
// ![Image](https://javascript.info/task/check-login/ifelse_task.svg)
// Please use nested if blocks. Mind the overall readability of the code.
// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

let user = prompt("Who is there?");
if (user === "Admin") {
    let password = prompt("Enter your password");
    
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === "" || password === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }

} else if (user === "" || user === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}