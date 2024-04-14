// Named exports:
// are imported within curly braces
// must be imported using the exact name as defined in the file
import { foo } from "./index";

// Default exports:
// are imported without curly braces
// can be imported using any name
import myFunc from "./index";


console.log(foo());
console.log(myFunc());