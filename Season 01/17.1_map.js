const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map((ele) => ele * 2);
console.log('Map Function Output - ' + doubleArr);

function convertToBinary(x) {
  return x.toString(2);
}
const binaryArr = arr.map(convertToBinary);
console.log('Binary conversion - ' + binaryArr);

// -------------------------------------------------------------------------
// Tricky Question
const users = [
  { firstName: 'Bruce', lastName: 'Wayne', age: 35 },
  { firstName: 'Tony', lastName: 'Stark', age: 40 },
];

// List of full name
const output = users.map((user) => user.firstName + ' ' + user.lastName);
console.log(output);
