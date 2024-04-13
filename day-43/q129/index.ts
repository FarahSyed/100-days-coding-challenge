"use strict";
// The regular function's this depends on how it is invoked and whether you're in strict mode or not
function foo () {
    console.log(this);   // undefined in strict mode, otherwise global object in node.js environment - because of this substitution
}

foo();


// The arrow function's this value is lexically captured from the parent scope at the time of it's definition regardless of strict and non-strict mode
const arrowFoo = () => {
    console.log(this);   // {} represents global object in node.js environment
}

arrowFoo();