// Already solved on day-30 in q90
// Function returns a random generated number
function genRandomNumber() {
    var random = Math.floor(Math.random() * 10) + 1; // * 10 Scales up and Math.floor() rounds down
    return random;
}
console.log(genRandomNumber());
