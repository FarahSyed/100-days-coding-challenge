var user = {
    name: 'Jane',
    city: 'Toronto',
    intro: function () {
        return "Hi! this is ".concat(this.name, ", I live in ").concat(this.city, ".");
    }
};
console.log(user.intro());
