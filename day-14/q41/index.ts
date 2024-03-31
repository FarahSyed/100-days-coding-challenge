// Array of magician’s names
const magicians: string[] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];

// Function receiving an array as a parameter
function show_magicians (magiciansList: string[]) {
    // Print each magician's name by looping throught it
    magiciansList.forEach(magician => console.log(magician));
}

show_magicians(magicians);  // Pass the array as an argument