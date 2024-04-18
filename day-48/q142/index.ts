// Function that returns a Promise
function promise () {

    // A new Promise that returns a string when resolved
    return new Promise<string>((resolve, reject) => {
        
        // This asynchronous task will resolve after 2 seconds (2000 milliseconds)
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    })
}
// promise().then(res => console.log(res)).catch(err => console.log(err));


// An asynchronous function that wait for the promise to be completed
async function asyncTask () {
    try {
        const res = await promise();
        console.log(res);
    } catch(error) {
        console.log(error);
    }
}
asyncTask();