// A Function that accepts two numbers and returns an object
const divide = (dividend: number, divisor: number): { quotient: number, remainder: number } => {

  // Divide the given values
  const quotient = dividend / divisor;
  
  // Get the remainder of the given values
  const remainder = dividend % divisor;

  // Return an object
  return { quotient, remainder };
};

console.log(divide(12, 5));