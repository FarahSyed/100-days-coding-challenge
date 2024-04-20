// JavaScript is a synchronous single-threaded language means its code executes from top to bottom and line by line
// But for asynchronous tasks like setTimeout, a web API inside the browser is utilized
// Event loop continously monitors the call stack and the calback queue, if the call Stack is empty and it finds something inside the callback queue then it pushes it to the call stack for execution.
console.log("Start"); // 1. Synchronously logs first
setTimeout(function () {
    console.log("I was scheduled for immediate execution, but logged after 'End'"); // 3. Schedules for 0 seconds but asynchronously logs third
}, 0); // Scheduled for immediate execution, but logged after "End"
console.log("End"); // 2. Synchronously logs second
// Despite having a delay of 0 milliseconds, the setTimeout callback is logged after "End" due to the event loop's behavior.
