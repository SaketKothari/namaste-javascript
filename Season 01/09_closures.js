// Closure - A function binds together with its lexical environment or function along with lexical scope is closure

function x() {
  const a = 8;
  function y() {
    console.log(a);
  }
  y();
}
x();

// -----------------------------------------------------------------------------
console.log();
// Once x2 is invoked it return y2
// Functions when they are returned from another function, they still maintains there lexical scope

function x2() {
  const a2 = 8;
  function y2() {
    console.log(a2);
  }
  return y2;
}
const z2 = x2();
console.log(z2);
z2();

// -----------------------------------------------------------------------------
console.log();
console.log('Some Cool Developers do this');

function x3() {
  const a3 = 8;
  return function y3() {
    console.log(a3);
  };
}

const z3 = x3();
console.log(z3);
z3();

// -----------------------------------------------------------------------------
console.log();
function x4() {
  const a4 = 8;
  function y4() {
    console.log(a4);
  }
  return y4();
}

x4();

// -----------------------------------------------------------------------------
console.log();
console.log('Corner Cases');

function x5() {
  var a5 = 8;
  function y5() {
    console.log(a5);
  }
  a5 = 100;
  return y5;
}
const z5 = x5();
z5();

// -----------------------------------------------------------------------------
// Now here in y6 we're trying to access it's parent scope for a6 and parent's parent scope for b6
function z6() {
  var b6 = 900;
  function x6() {
    var a6 = 8;
    function y6() {
      console.log(a6, b6);
    }
    y6();
  }
  x6();
}

z6();
