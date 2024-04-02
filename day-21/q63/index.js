// Function accepting shape param with type of Shape (Circle or Rectangle) and returning string
function describeShape(shape) {
    // Check shape type then return its properties accordingly
    if (shape.type === "circle") {
        return "It is a ".concat(shape.type, ", having radius: ").concat(shape.radius);
    }
    else {
        return "It is a ".concat(shape.type, ", having width: ").concat(shape.width, " and height: ").concat(shape.width);
    }
}
// Store circle and rectangle objects in variables
var circleObj = { type: "circle", radius: 50 };
var rectangleObj = { type: "rectangle", width: 80, height: 50 };
// Identify shapes by passing the objects as an argument in function invocations
console.log(describeShape(circleObj));
console.log(describeShape(rectangleObj));
