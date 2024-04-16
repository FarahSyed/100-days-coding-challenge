// This function explicitly throws an error
function throwAnError() {
    throw new Error("Internal Server Error");
}

try {
    // Block of code that may throw an error
    const result = throwAnError();
    console.log("Result:", result);
  } catch (error) {
    // Catch block to handle the error
    console.error("An error occurred:", error.message);
}