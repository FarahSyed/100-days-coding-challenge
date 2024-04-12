// The value of this keyword inside a nested function within a method

const user = {
    name: 'Jane',
    city: 'Toronto',
    intro: function() {
        function nestedFunction() {
            console.log(`Hi ${this.name} - from nested function.`);   // undefined
        }
        nestedFunction();
        return `Hi! this is ${this.name}, I live in ${this.city}.`;   // Works as expected
    }
};

console.log(user.intro());


// To solve the above "undefined":
// 1. We can store the outer this in a variable inside the method
const user2 = {
    name: 'Jane',
    city: 'Toronto',
    intro: function() {
        let self = this;    // Storing outer this in a variable
        function nestedFunction(self) {
            console.log(`Hi ${self.name} - from nested function.`);   // Jane
        }
        nestedFunction(self);
        return `Hi! this is ${this.name}, I live in ${this.city}.`;   // Works as expected
    }
};

console.log('By storing outer this in a variable');
console.log(user2.intro());


// 2. We can use arrow function as they don't provide their own this binding it retians the this value of the enclosing lexical context (in our case the intro() method)
const user3 = {
    name: 'Jane',
    city: 'Toronto',
    intro: function() {
        
        const nestedFunction = () => {  // Enclosing lexical context - same as of intro() method's this
            console.log(`Hi ${this.name} - from nested function.`);   // Jane
        }
        nestedFunction();
        return `Hi! this is ${this.name}, I live in ${this.city}.`;   // Works as expected
    }
};

console.log('By using arrow function');
console.log(user3.intro());