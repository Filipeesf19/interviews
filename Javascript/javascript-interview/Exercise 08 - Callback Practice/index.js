// CALLBACK CONDITION
//In the example usage, we filter even numbers from the numbers array using the isEven callback function.

function filterArray(arr, callback) {
  const filteredArray = [];
  for (const item of arr) {
    if (callback(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}

// Example usage: Filter even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (number) => number % 2 === 0;
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]
