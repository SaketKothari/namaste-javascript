// console.log(a); // Reference Error - Cannot access a before initialization because a is in temporal deadzone
console.log(b); // undefined

let a = 10;
console.log(a);
var b = 100;

// console.log(window.a);   => undefined
// console.log(this.a);     => undefined
// console.log(window.b);   => 100
// console.log(this.b);     => 100

// -------------------------------------------------------------------------

/* 
It looks like let isn't hoisted, but it is, let's understand:-
    1) Both a and b are actually initialized as undefined in hoisting stage.
    2) But var b is inside the storage space of GLOBAL.
    3) a is in a separate memory object called script, where it can be accessed only after assigning some value to it first.
    4) One can access 'a' only if it is assigned. Thus, it throws error.
    5) This phase is called temporal deadzone.
*/

// -------------------------------------------------------------------------

let a1 = 10;
// let a1 = 100;    => Syntax Error
// var a1 = 1000;   => Syntax Error

var b1 = 10;
var b1 = 100;

let c;
c = 98;
console.log(c);

// const c1;        => Syntax Error - Missing initializer in const declaration
// c1 = 98;
const c2 = 10;
// c2 = 1000;           => TypeError: Assignment to constant variable.
// console.log(c3);     => Reference Error - c3 is not defined
