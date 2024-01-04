console.log('Function Statement');

function a() {
  console.log('a called');
}
a();

// -----------------------------------------------------------------------------
console.log();
console.log('Function Expression - function acts like a variable');

const b = function () {
  console.log('b called');
};
b();

// -----------------------------------------------------------------------------
console.log();
console.log(
  'Difference bw function statement and function expression is hoisting'
);
a1();
// b1(); // TypeError b1 is not a function
function a1() {
  console.log('a1 called');
}

const b1 = function () {
  console.log('b1 called');
};

// -----------------------------------------------------------------------------
console.log();
console.log('Function Declaration also called function statement');

// -----------------------------------------------------------------------------
console.log();
console.log('Anonymous function - a function with no name');

/*
Syntax Error - Function statements require a function name
function() {

}
*/
const b2 = function () {
  console.log('b2 called');
};

b2();

// -----------------------------------------------------------------------------
console.log();
console.log('Named function expression');

const b3 = function namedFunction() {
  console.log('b3 called');
  console.log(namedFunction);
};

b3();
// namedFunction(); // ReferenceError - namedFunction is not defined

// -----------------------------------------------------------------------------
console.log();
console.log('Difference bw parameters and arguements');

const b4 = function (param1, param2) {
  console.log('b4 called');
};

b4(1, 2); // Arguements

// -----------------------------------------------------------------------------
console.log();
console.log('First Class Functions/Citizens');

// We can use function to pass in as values also in calling
const b5 = function (param1) {
  console.log(param1);
};

b5(function () {});

// -----------------------------------------------------------------------------
console.log();
console.log('Passing another function inside a function');

const b6 = function (param1) {
  console.log(param1);
};

function namedFunction2() {}

b6(namedFunction2);

// -----------------------------------------------------------------------------
console.log();
console.log('Return a function from a function');

const b7 = function (param1) {
  return function () {};
};

console.log(b7());

// -----------------------------------------------------------------------------
console.log();
console.log('Return a named function from a function');

const b8 = function (param1) {
  return function namedFunction3() {};
};

console.log(b8());

// The ability to use function as values, pass function to another function, return a function from a function is called first clas functions

// -----------------------------------------------------------------------------
console.log();
console.log('Arrow Functions');
