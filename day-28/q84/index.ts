// A function that takes a string
function replaceString(sentence: string) {

    // Replaces all the instances of JavaScript with TypeScript
    return sentence.replace(/JavaScript/g, "TypeScript");   // used /.../g to replace all
    
}

// Log the result of the function invocation
console.log(replaceString("I enjoy coding in JavaScript because of JavaScript's versatility, JavaScript is simply awesome!"));