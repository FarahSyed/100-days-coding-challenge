// ----------------------- Synchronous Code Execution -----------------------
// Synchronous code executes line by line, blocking further execution until each line is complete.
// This means that if a function takes a long time to execute, it will block subsequent code from running.

console.log("Start Sync"); // 1. Synchronously logs first

// Simulating a long-running synchronous task
for (let i = 0; i < 1000000000; i++) {
    // Heavy computation
}

console.log("End Sync"); // 2. Synchronously logs second


// ----------------------- Asynchronous Callback -----------------------
// Asynchronous operations allow JavaScript to perform tasks without blocking the main thread.
// Callback functions are commonly used in asynchronous programming to handle the results of asynchronous operations.

console.log("Start Async"); // 3. Synchronously logs third

// Simulating an asynchronous operation using setTimeout
setTimeout(() => {
  console.log("Async callback executed after 2 seconds"); // 5. Asynchronously logs fifth
}, 2000); // Delay time in milliseconds

console.log("End Async"); // 4. Synchronously logs fourth

// Output:
// Start Sync
// End Sync
// Start Async
// End Async
// Async callback executed after 2 seconds

// In synchronous code execution, each line of code is executed in order, and the next line waits for the current line to finish.
// In asynchronous code execution, asynchronous tasks are initiated but don't block the main thread. Callback functions are used to handle the results of these tasks.
// In the example, the "Async callback executed after 2 seconds" message is logged after the other messages, demonstrating that the setTimeout callback executes asynchronously after a delay.