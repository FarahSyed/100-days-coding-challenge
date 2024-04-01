// Function Declaration
function calcAreaOfRectangle(length, width) {
    var areaOfRectangle = length * width;
    return areaOfRectangle;
}
console.log(calcAreaOfRectangle(3, 2));
// Refactored to an arrow function
var calculateAreaOfRectangle = function (length, width) {
    var areaOfRectangle = length * width;
    return areaOfRectangle;
};
console.log(calculateAreaOfRectangle(3, 2));
