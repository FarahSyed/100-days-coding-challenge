// Function that takes two strings and compare them regardless of their case then returns a boolean
function compareStrings(str1: string, str2: string): boolean {
    
    // Convert both strings to lowercase then compare them
    const areStringsEqual = str1.toLowerCase() === str2.toLowerCase();
    return areStringsEqual;
}

console.log(compareStrings("mYNaMe", "MynAmE"));    // true
console.log(compareStrings("coAT", "boAT"));    // false