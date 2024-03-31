// Array of magician’s names
var magicians = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];
// Function receiving an array as a parameter
function show_magicians(magiciansList) {
    // Print each magician's name by looping throught it
    magiciansList.forEach(function (magician) { return console.log(magician); });
}
show_magicians(magicians); // Pass the array as an argument
