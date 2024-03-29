let userNames = ["Oliver", "James", "Alice", "Admin", "Claire"];

for (const i of userNames) {
    if (i === "Admin") {
        // Print specific message for admin
        console.log(`Hello ${i}, would you like to see a status report?`);
    } else {
        // Print generic message for everyone
        console.log(`Hello ${i}, thank you for logging in`);
    }
};