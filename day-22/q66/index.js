// A Function that accepts two boolean values and returns a boolean
var checkIfTrue = function (param1, param2) {
    // checks if both params are true only then returns true else false
    return param1 && param2;
};
console.log(checkIfTrue(!false, true)); // true
