let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numbers) {
    // Change suffix of each number accordingly
    let suffix = `th`;
    if (i === 1) {
        suffix = `st`;
    } else if (i === 2) {
        suffix = `nd`;
    } else if (i === 3) {
        suffix = `rd`;
    }
    console.log(`${i}${suffix}`);
};