function a() {
  console.log(b);
}

const b = 10;
a();

// -------------------------------------------------------------------------

function a1() {
  c1();
  function c1() {
    console.log(b1);
  }
}

const b1 = 10;
a1();

// -------------------------------------------------------------------------

function a2() {
  const b2 = 10;
  c2();
  function c2() {
    console.log(b2);
  }
}

a2();

// -------------------------------------------------------------------------

function a3() {
  const b3 = 10;
  c3();
  function c3() {}
}

a3();
// console.log(b3);  // error

// -------------------------------------------------------------------------
// Lexical Environment

function a4() {
  const b4 = 10;
  c4();
  function c4() {
    console.log(b4);
  }
}

a4();

// So lexical parent of c4 is a4
// Lexical parent of a4 is global execution context
