function x() {
  console.log('Namaste');
}

function y(x) {
  x();
}

y(x);

// y() is higher order function
// x() is callback function

// ----------------------------------------------------------------------------
console.log();
console.log('Introduction to Functional Programming');

const radiusArr = [3, 1, 2, 4];

const calculateArea = function (radiusArr) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(Math.PI * radiusArr[i] * radiusArr[i]);
  }
  return output;
};
console.log(calculateArea(radiusArr));

const calculateCircumference = function (radiusArr) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(2 * Math.PI * radiusArr[i]);
  }
  return output;
};
console.log(calculateCircumference(radiusArr));

// We're repeating the same code again and again

// -----------------------------------------------------------------------------
console.log();
console.log('Optimize our code - Higher order function');

const radiusArray = [3, 1, 2, 4];
const areaOfCircle = function (radiusArray) {
  return Math.PI * radiusArray * radiusArray;
};

const circumferenceOfCircle = function (radiusArray) {
  return 2 * Math.PI * radiusArray;
};

// Polyfill for map
const calculate = function (radiusArray, logic) {
  const output1 = [];
  for (let j = 0; j < radiusArray.length; j++) {
    output1.push(logic(radiusArray[j]));
  }
  return output1;
};

console.log(calculate(radiusArray, areaOfCircle));
console.log(calculate(radiusArray, circumferenceOfCircle));

// calculate() is higher order function
// areaOfCircle() is callback function

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
console.log();
console.log('Pollyfil for map function in JavaScript');

// calculate() is similar to map() function, also map() is a very common higher order function

// map() maps the whole array with some logic and that logic is what we pass
console.log(radiusArray.map(areaOfCircle));

// map() also creates a new array in this we've output1 and iterate over each of these elements in the radiusArray array and then returns the output

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
console.log();
console.log("Let's try to make this calculate() exactly similar to map()");

// Now this calculate() will be available on all the arrays we see
Array.prototype.calculatePolyfill = function (logic) {
  const output2 = [];

  for (let k = 0; k < this.length; k++) {
    output2.push(logic(this[k]));
  }
  return output2;
};

// Where do we get array from
// Over here in the calculatePolyfill() the "this" points to the radiusArray
console.log(radiusArray.calculatePolyfill(areaOfCircle));
