# Day-66 Task:

## Description
Learn about different TypeScript type system concepts by using the following guide and coding along with the examples provided in it:

[TypeScript Type System Concepts](https://github.com/AsharibAli/100-days-of-code/blob/main/day-66/TS-Type-System-Concepts/README.md)

## TypeScript Type System Concepts:

## Union Types
Union types in TypeScript allow variables to have more than one data type. In the provided example, the variable `myVar` is declared with a union type `string | number`, which means it can hold values of either type `string` or type `number`.

### Example

```typescript
// Declaring a variable 'myVar' with a union type 'string | number'
let myVar: string | number;

// Assigning a string value to 'myVar'
myVar = "Hello";
console.log(myVar); // Output: Hello

// Assigning a number value to 'myVar'
myVar = 45;
console.log(myVar); // Output: 45
```

In this example:

- We declare a variable named `myVar` with a union type `string | number`.  
- We assign a string value `"Hello"` to `myVar`, followed by logging its value to the console.  
- Next, we assign a number value `45` to `myVar` and log its value again.  
 <br />
Using union types provides flexibility in handling variables that may need to hold different types of values at different times during the execution of a program. It allows you to write code that can handle multiple data types without sacrificing type safety.

## Literal Types
In TypeScript, literal types allow you to specify exact values that a variable or function parameter can have.

### Example
```typescript
let direction: "left" | "right" | "up" | "down";

function setColor(color: "red" | "green" | "blue") {
    // ...
}
```

In the example above:

- We declare a variable `direction` with a literal type `"left" | "right" | "up" | "down"`. This means that `direction` can only have one of these four string values: `"left"`, `"right"`, `"up"`, or `"down"`.  
- We define a function `setColor` with a parameter `color` of literal type `"red" | "green" | "blue"`. This means that the `color` parameter can only be one of these three string values: `"red"`, `"green"`, or `"blue"`.  
<br />
Using literal types provides strictness and clarity in code. It restricts the allowed values to a specific set, preventing unintended values from being assigned. For example, if we try to assign a value other than `"left"`, `"right"`, `"up"`, or `"down"` to the `direction` variable or a value other than `"red"`, `"green"`, or `"blue"` to the `color` parameter, TypeScript will throw a compile-time error, ensuring type safety and correctness in our code.  

## Nullable Types

Nullable types in TypeScript allow variables to hold either a specified type or the value `null`.

### Example
```typescript
// Declaring variables with nullable types
let username: string | null = "David"; // The variable can hold a string or null
let age: number | null = null; // The variable can hold a number or null

// Defining a function that greets users
function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

// Invoking the greetUser function with different arguments
greetUser("Sam"); // Output: Hello, Sam!
greetUser(null);  // Output: Hello, Guest!
```

- We declare two variables, `username` and `age`, with nullable types.  
  - The variable `username` can hold a value of type `string` or `null`.  
  - The variable `age` can hold a value of type `number` or `null`.  
- We define a function `greetUser` that takes a parameter `username` with a nullable type `string | null`.
  - Inside the function, we use an `if` statement to check if `username` is `null`.  
  - If `username` is `null`, we log "Hello, Guest!" to the console.  
  - Otherwise, we log a personalized greeting using the `username`.  
- We call the `greetUser` function with different arguments:
  - `"Sam"`: This results in the output "Hello, Sam!" because a valid string argument is provided.
  - `null`: This results in the output "Hello, Guest!" because `null` is passed as the argument, triggering the conditional branch for guests.  

## Type Alias

Type aliases in TypeScript, which allow creating custom names for existing types and defining complex types.

### Example
```typescript
// Defining a type alias for string
type MyString = string;

// Assigning a value to a variable with the defined type alias
let myName: MyString = "Sam";

// Defining a type alias for a union of string and number
type MyStringOrNumber = string | number;

// Assigning a value to a variable with the defined type alias
let myValue: MyStringOrNumber = 10;

// Defining a type alias for an object structure
type Employee = {
  name: string;
  age: number;
  email?: string; // Optional property
};

// Declaring variables using the defined type alias
const alina: Employee = {
  name: "Alina",
  age: 30,
  email: "alina@example.com",
};

const david: Employee = {
  name: "David",
  age: 25,
};

// Logging the objects to the console
console.log(alina); // Output: { name: 'Alina', age: 30, email: 'alina@example.com' }
console.log(david); // Output: { name: 'David', age: 25 }
```
In this example

- We define a type alias `MyString` for the existing type `string`.
  - This alias can be used interchangeably with the `string` type.
- We declare a variable `myName` and assign a string value to it, specifying the type as `MyString`.
- We define another type alias `MyStringOrNumber` for a union of `string` and `number`.
  - This alias can hold values that are either strings or numbers.
- We declare a variable `myValue` and assign a numeric value to it, specifying the type as `MyStringOrNumber`.
- We define a type alias `Employee` for an object structure containing `name`, `age`, and optionally `email`.
  - The `email` property is marked as optional using the `?` syntax.
- We declare two variables `alina` and `david` using the `Employee` type alias.
  - `alina` has all properties specified, including `name`, `age`, and `email`.
  - `david` has only `name` and `age` properties, demonstrating the optional nature of the `email` property.
- We log the objects `alina` and `david` to the console, showing their respective property values.

This example showcases how type aliases provide a way to create more descriptive names for types and simplify complex type definitions, improving code readability and maintainability.

## Intersection Types

This example demonstrates the use of intersection types in TypeScript, which combine multiple types into a single type that contains all properties from each constituent type.

### Example
```typescript
// Defining a type for the first set of properties
type FirstType = {
  name: string;
  age: number;
};

// Defining a type for the second set of properties
type SecondType = {
  address: string;
  phone: string;
};

// Creating a new type by intersecting the two types
type CombinedType = FirstType & SecondType;

// Declaring a variable of the combined type
const person: CombinedType = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
  phone: "123-456-7890",
};
```

In the example above:

- We define two separate types: `FirstType` and `SecondType`, each representing a distinct set of properties.
  - `FirstType` includes properties `name` (of type `string`) and `age` (of type `number`).
  - `SecondType` includes properties `address` (of type `string`) and `phone` (of type `string`).
- We create a new type `CombinedType` by intersecting `FirstType` and `SecondType` using the `&` operator.
  - The `CombinedType` contains all properties from both `FirstType` and `SecondType`.
- We declare a variable `person` of type `CombinedType` and initialize it with an object that has properties from both `FirstType` and `SecondType`.
  - The `person` object includes properties `name`, `age`, `address`, and `phone`, combining the properties from both types.

This example illustrates how intersection types enable the creation of new types that contain all properties from multiple constituent types. It allows for the composition of complex types by combining the features of individual types, enhancing code reusability and maintainability.