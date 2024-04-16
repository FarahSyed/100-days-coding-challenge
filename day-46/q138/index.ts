/* Note:
    To run this file, use the following command:
    $ tsc index.ts && node inspect index.js
   
    You can use commands like c (continue), n (next), s (step), o (out), 
    repl (inspect variables), etc., to debug your code. 
    
    After inspecting variables or stepping through the code, you can 
    continue execution by typing c or pressing Ctrl + C twice.
*/

// A function that performs some calculations
function calculate(x: number, y: number) {
    let result = x + y;
    console.log("Result of addition:", result);

    // Introduce a breakpoint here to pause execution
    debugger;

    result *= 2;
    console.log("Result after doubling:", result);

    return result;
}

// Call the function with some arguments
const result = calculate(10, 20);
console.log("Final result:", result);