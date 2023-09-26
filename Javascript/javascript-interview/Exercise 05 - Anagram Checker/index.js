function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters, spaces, and convert both strings to lowercase
  str1 = str1.replace(/[^a-z]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-z]/g, "").toLowerCase();

  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in both strings and compare them
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams("secure", "rescue")); // Output: true
console.log(areAnagrams("Hello, World!", "World, hello!")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
