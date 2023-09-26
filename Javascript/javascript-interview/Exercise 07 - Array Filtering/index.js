const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

function filterPeopleByAge(peopleArray, ageThreshold) {
  return peopleArray.filter((person) => person.age > ageThreshold);
}

// Example usage:
const filteredPeople = filterPeopleByAge(people, 30);
console.log(filteredPeople);
