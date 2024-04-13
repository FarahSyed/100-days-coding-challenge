// An arrow function an arrow function that takes multiple parameters and returns the product of all parameters
var calcProduct = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, curr) { return total * curr; }, 1);
};
console.log(calcProduct(1, 2, 3, 4, 5, 6, 7));
