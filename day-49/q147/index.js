// A function that takes user Id and a callback function
function getUser(id, callback) {
    // An asynchronous operation with a setTimeout
    setTimeout(function () {
        // If user id is equals to 1 return the user object
        if (id === 1) {
            callback(null, { id: 1, name: 'Alice' });
        }
        else {
            // Else throw an error
            callback(new Error('User not found'), null);
        }
    }, 100); // The callback function will be executed after 100 milliseconds
}
// Function takes user id, and a callback function
getUser(1, function (err, user) {
    // If an error occurs log the error message return early
    if (err) {
        console.error("Error: ".concat(err.message));
        return;
    }
    // Log the user's name to the console using optional chaining
    console.log("User: ".concat(user === null || user === void 0 ? void 0 : user.name));
});
