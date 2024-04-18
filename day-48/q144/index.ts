// Three functions returning promises based on the boolean value passed to them
function promiseOne(bool: boolean) {
    return new Promise<string>((resolve, reject) => {
        if(bool) {
            setTimeout(() => {
                resolve("First Resolved");
            }, 1000 * 1);
        } else {
            reject("First Rejected");
        }
    }) 
}

function promiseTwo(bool: boolean) {
    return new Promise<string>((resolve, reject) => {
        if(bool) {
            setTimeout(() => {
                resolve("Second Resolved");
            }, 1000 * 2);
        } else {
            reject("Second Rejected");
        }
    }) 
}

function promiseThree(bool: boolean) {
    return new Promise<string>((resolve, reject) => {
        if(bool) {
            setTimeout(() => {
                resolve("Third Resolved");
            }, 1000 * 3);
        } else {
            reject("Third Rejected");
        }
    }) 
}

// Promise.all takes an array of all Promises
Promise.all([promiseOne(true), promiseTwo(true), promiseThree(true)])
.then(res => console.log(res))    // If all promises resolve .then will run with an array of resolved values
.catch(err => console.log(err));   // If any promise rejects .catch will run with the error of any rejected promise