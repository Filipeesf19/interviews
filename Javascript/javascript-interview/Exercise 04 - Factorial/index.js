function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage:
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
