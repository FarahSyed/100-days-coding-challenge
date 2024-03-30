var current_users = ["Oliver", "James", "Alice", "Admin", "Claire"];
var new_users = ["Oliver", "Jones", "Alice", "Adam", "Blaire"];
// Loop through the new_users list
for (var i = 0; i < new_users.length; i++) {
    // Change to lower case
    current_users[i] = current_users[i].toLowerCase();
    new_users[i] = new_users[i].toLowerCase();
    // Check if each new username has already been used
    if (current_users.includes(new_users[i])) {
        console.log("Username ".concat(new_users[i], " is not available. Please enter a new username"));
    }
    else {
        console.log("Username ".concat(new_users[i], " is available"));
    }
}
