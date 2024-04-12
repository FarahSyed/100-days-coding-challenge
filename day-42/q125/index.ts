const user = {
    name: 'Jane',
    city: 'Toronto',
    intro: function() {
        return `Hi! this is ${this.name}, I live in ${this.city}.`;
    }
};

console.log(user.intro());