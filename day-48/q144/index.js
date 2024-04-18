// Three functions returning promises based on the boolean value passed to them
function promiseOne(bool) {
    return new Promise(function (resolve, reject) {
        if (bool) {
            setTimeout(function () {
                resolve("First Resolved");
            }, 1000 * 1);
        }
        else {
            reject("First Rejected");
        }
    });
}
function promiseTwo(bool) {
    return new Promise(function (resolve, reject) {
        if (bool) {
            setTimeout(function () {
                resolve("Second Resolved");
            }, 1000 * 2);
        }
        else {
            reject("Second Rejected");
        }
    });
}
function promiseThree(bool) {
    return new Promise(function (resolve, reject) {
        if (bool) {
            setTimeout(function () {
                resolve("Third Resolved");
            }, 1000 * 3);
        }
        else {
            reject("Third Rejected");
        }
    });
}
// Promise.all takes an array of all Promises
Promise.all([promiseOne(true), promiseTwo(true), promiseThree(true)])
    .then(function (res) { return console.log(res); }) // If all promises resolve .then will run with an array of resolved values
    .catch(function (err) { return console.log(err); }); // If any promise rejects .catch will run with the error of any rejected promise
