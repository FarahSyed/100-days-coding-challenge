// Function Declaration
function calcAreaOfRectangle(length: number, width: number) {
    const areaOfRectangle = length * width;
    return areaOfRectangle;
}
console.log(calcAreaOfRectangle(3, 2));


// Refactored to an arrow function
const calculateAreaOfRectangle = (length: number, width: number) => {
    const areaOfRectangle = length * width;
    return areaOfRectangle;
}
console.log(calculateAreaOfRectangle(3, 2));