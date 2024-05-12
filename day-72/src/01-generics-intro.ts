// --------------------------- Generics Intro ---------------------------

// A generic function that takes a type as input and returns the type as output
function returnType<Type>(params: Type): Type {
    return params;
}

// Usage of the generic function as return type
const numVal: number = returnType<number>(9);
const strVal: string = returnType<string>("Hi");
const boolVal: boolean = returnType<boolean>(true);
const arrNumVal: number[] = returnType<number[]>([4, 6, 7]);


console.log(`Number Value: ${numVal}`);
console.log(`String Value: ${strVal}`);
console.log(`Boolean Value: ${boolVal}`);
console.log(`Array Value: ${arrNumVal}`);