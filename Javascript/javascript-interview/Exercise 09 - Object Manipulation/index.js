// Function to add a property to an object
function addProperty(obj, key, value) {
  obj[key] = value;
}

// Function to delete a property from an object
function deleteProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
}

// Function to update a property of an object
function updateProperty(obj, key, newValue) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = newValue;
  }
}

// Example usage:
const person = {
  name: "Alice",
  age: 30,
};

console.log(person); // Original object

addProperty(person, "city", "New York"); // Add the "city" property
console.log(person);

deleteProperty(person, "age"); // Delete the "age" property
console.log(person);

updateProperty(person, "name", "Bob"); // Update the "name" property
console.log(person);
