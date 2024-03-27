let person: {
    // Declaring object with types
    name: string;
    age: number;
    email: string;
    languages: string[];
    address: {
        street: string;
        zip: number;
        city: string;
        country: string;
    };
} = {   // Initializing the object
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
}

// Access properties with dot/literal notation and bracket notation
console.log(`${person.name} lives in ${person['address']['city']}. He speaks ${person.languages.length} languages.`);