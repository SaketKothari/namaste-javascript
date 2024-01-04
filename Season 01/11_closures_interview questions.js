function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

outer()(); // or const z = outer(); z();

// -----------------------------------------------------------------------------
console.log();
function outer1() {
  function inner1() {
    console.log(a1);
  }
  var a1 = 10;
  return inner1;
}

outer()();

// -----------------------------------------------------------------------------
console.log();
console.log('Are Let declarations closed over?');

function outer1() {
  function inner1() {
    console.log(a1);
  }
  let a1 = 10;
  return inner1;
}

const z1 = outer1();
z1();

// -----------------------------------------------------------------------------
console.log();
console.log('Are function parameters closed over?');

function outer2(b2) {
  function inner2() {
    console.log(a2, b2);
  }
  let a2 = 10;
  return inner2;
}

const z2 = outer2('Hello World');
z2();

// -----------------------------------------------------------------------------
console.log();
console.log('Relation of Scope Chain and Closures');

function outest() {
  const c3 = 20;
  function outer3(b3) {
    function inner3() {
      console.log(a3, b3, c3);
    }
    let a3 = 10;
    return inner3;
  }
  return outer3;
}

const z3 = outest()('Hello World');
z3();

// -----------------------------------------------------------------------------
console.log();
console.log('Conflicting name Global variables in JS');

function outest4() {
  const c4 = 20;
  function outer4(b4) {
    function inner4() {
      console.log(a4, b4, c4);
    }
    // let a4 = 10;
    return inner4;
  }
  return outer4;
}

let a4 = 100;
const z4 = outest4()('Hello World');
z4();

// -----------------------------------------------------------------------------
console.log();
console.log('Data hiding with closures');

function counter() {
  var count = 0; // count is hidden
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

const counterReceiver = counter();
counterReceiver();
counterReceiver();

// -----------------------------------------------------------------------------
console.log();
console.log('Function Constructor in JavaScript');

function Counter2() {
  var count2 = 0;
  this.incrementCounter2 = function () {
    count2++;
    console.log(count2);
  };
  this.decrementCounter2 = function () {
    count2--;
    console.log(count2);
  };
}

const counterReceiver2 = new Counter2();

counterReceiver2.incrementCounter2();
counterReceiver2.incrementCounter2();
counterReceiver2.decrementCounter2();

// -----------------------------------------------------------------------------
console.log();
console.log('Relation between Garbage Collection, Memory Leaks, and Closures');

function a5() {
  var x5 = 0;
  function b5() {
    console.log(x5);
  }
  return b5;
}

const z5 = a5();
z5();

/* 
1) Once a5() is called, its element x5 should be garbage collected ideally.
2)  But fun b5() has closure over var x5. 
3) So mempry of x5 cannot be freed. 
4) Like this if more closures formed, it becomes an issue. 
5) To solve this, JS engines like v8 and Chrome have smart garbage collection mechanisms. 
*/

// -----------------------------------------------------------------------------
console.log();
console.log('Example of Smart Garbage collection by V8 JS Engine in Chrome');

function a6() {
  var x6 = 0,
    y6 = 10;
  function b6() {
    console.log(x6);
  }
  return b6;
}

const z6 = a6();
z6();

// So when b6() return y6 is garbage collected and x6 is not
// When console log happens, x6 is printed as 0 but y6 is removed automatically.
