// An object including some properties and a method
var laptop = {
    make: "HP",
    model: "Probook 450",
    year: 2022,
    describe: function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " packs 512GB of HDD storage."));
    },
};
// Invoke the method
laptop.describe();
