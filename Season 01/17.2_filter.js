const arr = [1, 2, 3, 4, 5];

// Filter function to give odd no in an arr
const filtered = arr.filter((x) => x % 2);
console.log('Filter Function Output ' + filtered);

// -------------------------------------------------------------------------
// Tricky Question - Example 2
const users = [
  { firstName: 'Bruce', lastName: 'Wayne', age: 35 },
  { firstName: 'Tony', lastName: 'Stark', age: 40 },
  { firstName: 'Clark', lastName: 'Kent', age: 40 },
];

// Get users whose age < 40
const output = users.filter((user) => user.age < 40);
console.log(output);

// Chaining map and filter to get the firstname of user whose age < 40
const output2 = users
  .filter((user) => user.age < 40)
  .map((user) => user.firstName);
console.log(output2);
