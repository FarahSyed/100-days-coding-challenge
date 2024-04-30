// Task 1: Is "else" required?
// Answer: No, else is'nt required here, as there is no difference in the behavior of these two variants.


// Task 2: Rewrite the function using '?' or '||'
// 1. Using a question mark operator ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}


// 2. Using OR ||
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


// Task 3: Function min(a, b)
function min(a, b) {
    return (a < b) ? a : b;
}
alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));


// Task 4: Function pow(x, n)
function pow(x, n) {
    return x ** n;
}

let base = +prompt("Enter a base number");
let exponent = +prompt("Enter an exponent value");
if (exponent < 1){
    alert("Only natural exponent values are allowed!");
} else {
    alert(pow(base, exponent));
}