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
make_great(magicians); // Invoking the function to add the phrase
show_magicians(magicians); // Show that the actual list is modified
