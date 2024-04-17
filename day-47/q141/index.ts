// JavaScript is a synchronous single threaded programming language.
// So, to make it asynchronous, we can use Promises or asynchronous functions.

// The 'await' keyword in JavaScript is significant in asynchronous programming, 
// particularly when working with Promises and asynchronous functions 
// (functions that return Promises or are declared with the 'async' keyword)

async function getData() {
    try {
        // Send a GET request to the specified URL
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Extract JSON data from the response body and wait for it to be resolved
        const data = await response.json();
        
        // Log the retrieved data to the console
        console.log("Data:", data);
    } catch (error) {
        // If an error occurs during the fetch or JSON parsing, catch and log it
        console.log("Error:", error);
    }
}

// Call the getData function to initiate the asynchronous operation
getData();