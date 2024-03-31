// Array of objects containing multiple laptops
const laptops = [
    {
        make: "HP",
        model: "Probook 450",
        year: 2022,
    },
    {
        make: "Dell",
        model: "XPS 13 Plus Laptop 9320",
        year: 2022,
    },
    {
        make: "Apple",
        model: "MacBook Pro 14",
        year: 2023,
    },
];

// Destructure first and second elements from the array
const [hpLaptop, dellLaptop] = laptops;
console.log(hpLaptop);
console.log(dellLaptop);