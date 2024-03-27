var person = {
    name: "Tom",
    age: 20,
    email: "tom@email.com",
    languages: ['English', 'Mandarin', 'Spanish'],
    address: {
        street: "Yorkville Avenue",
        zip: 23542,
        city: "Toronto",
        country: "Canada",
    }
};
// Access properties with dot/literal notation and bracket notation
console.log("".concat(person.name, " lives in ").concat(person['address']['city'], ". He speaks ").concat(person.languages.length, " languages."));
