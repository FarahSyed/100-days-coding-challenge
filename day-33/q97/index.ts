// A function that returns the current date
function getCurrentDate(): string {

    // Get the current date object
    const currentDate = new Date();
    
    // Extract date from the date object also convert the extracted number to String because .padStart() is a string method
    const date = String(currentDate.getDate()).padStart(2, '0');   // .padStart() will ensure that the component is two digit long if not it will add 0 to it
    
    // Extract month from the date object and add 1 to it because getMonth() starts with index 0
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    
    // Extract full year from the date object
    const year = currentDate.getFullYear();

    // Return date in the format "DD-MM-YYYY"
    return `${date}-${month}-${year}`;
}

console.log(getCurrentDate());   // Invoke the function and log it