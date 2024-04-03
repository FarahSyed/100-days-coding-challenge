// A Function that accepts two boolean values and returns a boolean
const checkIfTrue = (param1: boolean, param2: boolean): boolean => {
    // checks if both params are true only then returns true else false
    return param1 && param2;    
}

console.log(checkIfTrue(!false, true));   // true