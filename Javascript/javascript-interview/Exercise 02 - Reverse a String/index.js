//USING REVERSE METHOD

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"

/* ------------------------------------------------------- */
//NOT USING REVERSE METHOD

function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage:
const originalString2 = "Hello, World!";
const reversedString2 = reverseString(originalString);
console.log(reversedString2); // Output: "!dlroW ,olleH"
