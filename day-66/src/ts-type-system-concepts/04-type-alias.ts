// --------------------------- Type Alias ---------------------------

type MyString = string;

let myName: MyString = "Sam";

type MyStringOrNumber = string | number;

let myValue: MyStringOrNumber = 10;

// Another example
type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alina: Employee = {
  name: "Alina",
  age: 30,
  email: "alina@example.com",
};

const david: Employee = {
  name: "David",
  age: 25,
};

console.log(alina);
console.log(david);