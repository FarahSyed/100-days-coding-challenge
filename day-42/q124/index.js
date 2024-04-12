var user = {
    name: 'Jane',
    greet: function () {
        return "Hi ".concat(this.name, "!");
    }
};
console.log(user.greet());
