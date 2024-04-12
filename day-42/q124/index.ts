const user = {
    name: 'Jane',
    greet: function() {
        return `Hi ${this.name}!`;
    }
};

console.log(user.greet());