// --------------------------- Type Annotations with Function ---------------------------

// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthOfRectangle: number, widthOfRectangle: number): number {
    return lengthOfRectangle * widthOfRectangle;
}

// Calling the function with valid arguments
const lengthOfRectangle = 5;
const widthOfRectangle = 3;
const area = calculateRectangleArea(lengthOfRectangle, widthOfRectangle);
console.log(`The area of the rectangle is ${area}`);