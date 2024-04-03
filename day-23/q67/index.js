// A Function that accepts a number and string and returns a number
function mixedTypeSum(num, str) {
    // Converts type string to type number then returns their sum
    return num + Number(str); // OR (+str)
}
console.log(mixedTypeSum(13, "-10"));
