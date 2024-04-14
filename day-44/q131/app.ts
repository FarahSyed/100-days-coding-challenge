import Individual from "./index";   // Class imported from index.ts

// Instances (or objects) of the "Individual" class
const individual1: Individual = new Individual("Alex", "JavaScript Developer", 6, ["JavaScript", "TypeScript"]);
const individual2: Individual = new Individual("Sam", "React.js Developer", 2, ["JavaScript", "ReactJS"]);

// Invoking methods of the Individual class
console.log(individual1.introduction());
console.log(individual2.introduction());