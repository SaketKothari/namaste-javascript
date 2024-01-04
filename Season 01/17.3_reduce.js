const arr = [1, 2, 3, 78, 4, 5];

// Traditional approach
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log('Traditional approach = ' + findSum(arr));

// Using reduce()
// Here acc = sum, curr = arr[i], 0 = initial value
const reducedValueSum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log('Reduce Function Sum Output =  ' + reducedValueSum);

// -------------------------------------------------------------------------
console.log();

// Traditional approach
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log('Traditional approach = ' + findMax(arr));

// Using reduce()
const reducedValueMax = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log('Reduce Function Max Output = ' + reducedValueMax);

// -------------------------------------------------------------------------
console.log();

// Tricky Question - Example 2
const users = [
  { firstName: 'Bruce', lastName: 'Wayne', age: 35 },
  { firstName: 'Tony', lastName: 'Stark', age: 40 },
  { firstName: 'Clark', lastName: 'Kent', age: 40 },
];

// Get the age in => {35:1, 40:2}
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);

// -------------------------------------------------------------------------
// Tricky Question - Example 3
// Get the firstname of user whose age > 36
const output2 = users.reduce(function (acc, user) {
  if (user.age > 36) {
    acc.push(user.firstName);
  }
  return acc;
}, []);

console.log(output2);
