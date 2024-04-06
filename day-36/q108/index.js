// Function that takes two strings and compare them regardless of their case then returns a boolean
function compareStrings(str1, str2) {
    // Convert both strings to lowercase then compare them
    var areStringsEqual = str1.toLowerCase() === str2.toLowerCase();
    return areStringsEqual;
}
console.log(compareStrings("mYNaMe", "MynAmE")); // true
console.log(compareStrings("coAT", "boAT")); // false
