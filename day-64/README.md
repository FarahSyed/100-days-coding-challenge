# Day-64 Task:

## Description
Learn about TypeScript objects by using the following guide and coding along with the examples provided in it:

[Type Annotations with Objects in TypeScript](https://github.com/AsharibAli/100-days-of-code/blob/main/day-64/TS-Object/README.md)

## Type Annotations with Objects

In TypeScript, you can specify type annotations for objects to define their structure and the types of their properties. Here's an example:

```typescript
let personOne: {
    name: string;
    age: number;
    jobTitle?: string; // Optional property
    adress: {
        street: string;
        city: string;
    };
};
```

The object defined in the TypeScript code represents a person with various properties such as `name`, `age`, `jobTitle`, and `address`. Let's break down the structure:
- `name`: A property of type `string`, representing the name of the person.
- `age`: A property of type `number`, representing the age of the person.
- `jobTitle` (optional): An optional property of type `string`, representing the job title of the person. The `?` symbol denotes that this property is optional.
- `address`: An object property containing nested properties for the person's address.
- `street`: A property of type `string`, representing the street address.
- `city`: A property of type `string`, representing the city name.  
  
Here's an example of how you can assign values to this object:
```typescript  
personOne = {
    name: "Sakura Tanaka",
    age: 30,
    jobTitle: "Software Engineer",
    adress: {
        street: "1-6-1 Ebisu",
        city: "Tokyo",
    },
};
```

In this example, `personOne` is assigned an object with values for each property, including an optional `jobTitle`. The `address` property contains an object with `street` and `city` properties to represent the person's address.  
  
Alternatively, you can declare and initialize an object with type annotations in a single statement:
```typescript
let personTwo: {
    name: string;
    age: number;
    jobTitle?: string;
    adress: {
        street: string;
        city: string;
    };
} = {
    name: "Haruto Yamamoto",
    age: 30,
    jobTitle: "Software Engineer",
    adress: {
        street: "1-5-1 Ebisu",
        city: "Tokyo",
    },
};
```

Using type annotations with objects provides clarity and ensures type safety in your TypeScript code.