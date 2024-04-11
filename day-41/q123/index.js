// Declare a string variable
var str = "This is a string";
// A Regular Expression for vowels, flag i is used for case insensitive
var vowels = /[aeiou]/i;
// Loops through the string and logs every character until it finds a vowel
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var i = str_1[_i];
    if (vowels.test(i))
        break;
    console.log(i);
}
