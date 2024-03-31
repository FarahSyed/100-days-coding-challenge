// An object including some properties and a method
const laptop = {
    make: "HP",
    model: "Probook 450",
    year: 2022,
    describe: function () {  // this refers to the current object i.e. laptop
        console.log(`The ${this.make} ${this.model} packs 512GB of HDD storage.`);
    },
}

// Invoke the method
laptop.describe();