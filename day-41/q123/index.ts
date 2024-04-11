// Declare a string variable
const str: string = "This is a string";

// A Regular Expression for vowels, flag i is used for case insensitive
const vowels = /[aeiou]/i;

// Loops through the string and logs every character until it finds a vowel
for (const i of str) {

    if (vowels.test(i)) break;
    console.log(i);
}