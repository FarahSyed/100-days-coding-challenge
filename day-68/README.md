# Day-68 Task:

## Description
Learn about TypeScript tuples by using the following guide and coding along with the examples provided in it:

[Tuple Data Type in TypeScript](https://github.com/AsharibAli/100-days-of-code/blob/main/day-68/TS-Tuple/README.md)

## Tuple:
Tuples in TypeScript are a way to define a fixed-length array of values of different types. This feature is particularly useful when you need to represent a collection of values that have a specific structure or format. In this example, we will explore how to use tuples in TypeScript.

### Example
```typescript
// Defining a tuple type 
let article: readonly [number, string, boolean] = [11, "Title One", true];

// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];

// Trying to push a new element into a tuple (results in an error)
// article.push(100);

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
```

In this example:

- We declare a tuple `article` with type `[number, string, boolean]`.
- Initializes `article` with values `[11, "Title One", true]`.
- Attempting to reassign `article` with `[12, "Title Two", false]` results in an error due to `readonly` constraint.
- Logs the `article` tuple.
- Destructures `article` into individual variables `id`, `title`, and `published`, and logs them.