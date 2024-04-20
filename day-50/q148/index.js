// At the start of the code execution log a message to the console
console.log("Code execution starts");
// setTimeout method takes 2 params first a callback function and a delay time (in milliseconds)
setTimeout(function () {
    console.log("I am executed after 3 seconds"); // This message will execute after 3 seconds
}, 1000 * 3);
