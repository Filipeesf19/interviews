function findMaximum(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  return Math.max(...arr);
}

function findMinimum(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  return Math.min(...arr);
}

function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  const sum = calculateSum(arr);
  return sum / arr.length;
}

// Test the functions
const numbers = [3, 7, 2, 8, 5];
console.log("Maximum:", findMaximum(numbers)); // Output: Maximum: 8
console.log("Minimum:", findMinimum(numbers)); // Output: Minimum: 2
console.log("Sum:", calculateSum(numbers)); // Output: Sum: 25
console.log("Average:", calculateAverage(numbers)); // Output: Average: 5
