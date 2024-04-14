"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Named exports:
// are imported within curly braces
// must be imported using the exact name as defined in the file
var index_1 = require("./index");
// Default exports:
// are imported without curly braces
// can be imported using any name
var index_2 = require("./index");
console.log((0, index_1.foo)());
console.log((0, index_2.default)());
