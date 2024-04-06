// Function simulates a dice roll
function rollTheDice() {
    // Generate a random number between 1 - 6
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}

console.log(rollTheDice());