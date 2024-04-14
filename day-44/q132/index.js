"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
// Named export
var foo = function () {
    return "I'm exported as foo";
};
exports.foo = foo;
// Default export
var exportFunc = function () {
    return "I'm exported as default";
};
exports.default = exportFunc;
