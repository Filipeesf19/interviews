function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanStr.split("").reverse().join("");

  // Check if the cleaned string and its reverse are equal
  return cleanStr === reversedStr;
}

// Example usage:
const testString1 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString1)); // Output: true

const testString2 = "racecar";
console.log(isPalindrome(testString2)); // Output: true

const testString3 = "Hello, World!";
console.log(isPalindrome(testString3)); // Output: false
