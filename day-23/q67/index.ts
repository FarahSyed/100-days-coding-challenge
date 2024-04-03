// A Function that accepts a number and string and returns a number
function mixedTypeSum(num: number, str: string): number {
    // Converts type string to type number then returns their sum
    return num + Number(str);   // OR (+str)
}

console.log(mixedTypeSum(13, "-10"));