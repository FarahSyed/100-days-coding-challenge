// A Function that print numbers
function printNumbers() {
    //  Print from 1 to 5 using for loop
    for (var i = 1; i < 6; i++) { // Variable initialized using let keyword
        console.log(i); // Accessible inside the block
    }
    // Attempting to access 'i' outside the loop causes a ReferenceError
    // because 'i' is block-scoped to the for loop and is not accessible here.
    // console.log(i);
}
printNumbers();
