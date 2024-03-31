// Array of magician’s names
let magicians: string[] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];

// Function receiving an array as a parameter
function show_magicians (magiciansList: string[]) {
    // Print each magician's name by looping throught it
    magiciansList.forEach(magician => console.log(magician));
}

// Function receiving an array as a parameter
function make_great (magiciansList: string[]) {
    // Print a modified phrase with each magician's name by looping throught it
    for (let i = 0; i < magiciansList.length; i++) {
        magiciansList[i] = `${magiciansList[i]} the Great`;
    }
}

let greatMagicians = [...magicians];
make_great(greatMagicians);  // Invoking the function to add the phrase
show_magicians(magicians);  // Show the actual list
show_magicians(greatMagicians);  // Modified List