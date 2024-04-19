// A function that takes user Id and a callback function
function getUser(id: number, callback: (err: Error | null, user: { id: number, name: string } | null) => void): void {
    
    // An asynchronous operation with a setTimeout
    setTimeout(() => {
    
        // If user id is equals to 1 return the user object
        if (id === 1) {
            callback(null, { id: 1, name: 'Alice' });
        } else {
            // Else throw an error
            callback(new Error('User not found'), null);
        }

    }, 100);   // The callback function will be executed after 100 milliseconds
}

// Function takes user id, and a callback function
getUser(1, (err, user): void => {

    // If an error occurs log the error message return early
    if (err) {
        console.error(`Error: ${err.message}`);
        return;
    }
    
    // Log the user's name to the console using optional chaining
    console.log(`User: ${user?.name}`);
});