var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magician’s names
var magicians = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];
// Function receiving an array as a parameter
function show_magicians(magiciansList) {
    // Print each magician's name by looping throught it
    magiciansList.forEach(function (magician) { return console.log(magician); });
}
// Function receiving an array as a parameter
function make_great(magiciansList) {
    // Print a modified phrase with each magician's name by looping throught it
    for (var i = 0; i < magiciansList.length; i++) {
        magiciansList[i] = "".concat(magiciansList[i], " the Great");
    }
}
var greatMagicians = __spreadArray([], magicians, true);
make_great(greatMagicians); // Invoking the function to add the phrase
show_magicians(magicians); // Show the actual list
show_magicians(greatMagicians); // Modified List
