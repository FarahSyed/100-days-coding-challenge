"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index"); // Class imported from index.ts
// Instances (or objects) of the "Individual" class
var individual1 = new index_1.default("Alex", "JavaScript Developer", 6, ["JavaScript", "TypeScript"]);
var individual2 = new index_1.default("Sam", "React.js Developer", 2, ["JavaScript", "ReactJS"]);
// Invoking methods of the Individual class
console.log(individual1.introduction());
console.log(individual2.introduction());
