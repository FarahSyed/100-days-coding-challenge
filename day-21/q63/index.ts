// Type Alias for Shape (Circle Or Rectangle)
type Shape = Circle | Rectangle ;

// Interface for object Circle
interface Circle {
    type: 'circle';
    radius: number;
}

// Interface for object Rectangle
interface Rectangle {
    type: 'rectangle';
    width: number;
    height: number;
}

// Function accepting shape param with type of Shape (Circle or Rectangle) and returning string
function describeShape(shape: Shape): string {
    
    // Check shape type then return its properties accordingly
    if(shape.type === "circle") {
        return `It is a ${shape.type}, having radius: ${shape.radius}`;
    } else {
        return `It is a ${shape.type}, having width: ${shape.width} and height: ${shape.width}`;
    }
}

// Store circle and rectangle objects in variables
const circleObj: Circle = {type: "circle", radius: 50};
const rectangleObj: Rectangle = {type: "rectangle", width: 80, height: 50};

// Identify shapes by passing the objects as an argument in function invocations
console.log(describeShape(circleObj));
console.log(describeShape(rectangleObj));