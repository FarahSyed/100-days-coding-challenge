// The value of this keyword inside a nested function within a method
var user = {
    name: 'Jane',
    city: 'Toronto',
    intro: function () {
        function nestedFunction() {
            console.log("Hi ".concat(this.name, " - from nested function.")); // undefined
        }
        nestedFunction();
        return "Hi! this is ".concat(this.name, ", I live in ").concat(this.city, "."); // Works as expected
    }
};
console.log(user.intro());
// To solve the above "undefined":
// 1. We can store the outer this in a variable inside the method
var user2 = {
    name: 'Jane',
    city: 'Toronto',
    intro: function () {
        var self = this; // Storing outer this in a variable
        function nestedFunction(self) {
            console.log("Hi ".concat(self.name, " - from nested function.")); // Jane
        }
        nestedFunction(self);
        return "Hi! this is ".concat(this.name, ", I live in ").concat(this.city, "."); // Works as expected
    }
};
console.log('By storing outer this in a variable');
console.log(user2.intro());
// 2. We can use arrow function as they don't provide their own this binding it retians the this value of the enclosing lexical context (in our case the intro() method)
var user3 = {
    name: 'Jane',
    city: 'Toronto',
    intro: function () {
        var _this = this;
        var nestedFunction = function () {
            console.log("Hi ".concat(_this.name, " - from nested function.")); // Jane
        };
        nestedFunction();
        return "Hi! this is ".concat(this.name, ", I live in ").concat(this.city, "."); // Works as expected
    }
};
console.log('By using arrow function');
console.log(user3.intro());
