// As we know b and c are hoisted into a separate memory space that is reserved for this block scope and firstly initialized as undefined and a is hoisted inside the global scope
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
// console.log(b);  => Reference error
// console.log(c);  => Reference error

// -----------------------------------------------------------------------------
console.log();
console.log('Shadowing');

var a1 = 100;
{
  var a1 = 10; // Inside one a1 will shadows the outside one a1
  console.log(a1);
}
// Now a1 is shadowed so it also modify the outside one a1 to 10
console.log(a1);

// -----------------------------------------------------------------------------
console.log();
let a2 = 100;
{
  let a2 = 10;
  console.log(a2);
}
console.log(a2);

// -----------------------------------------------------------------------------
console.log();
const a3 = 100;
{
  const a3 = 10;
  console.log(a3);
}
console.log(a3);

// -----------------------------------------------------------------------------
console.log();
console.log('Shadowing in function');

const a4 = 100;
function shadow() {
  const a4 = 10;
  console.log(a4);
}
shadow();
console.log(a4);

// -----------------------------------------------------------------------------
console.log();
console.log('Illegal Shadowing');

// We cannot shadow let using var
let a5 = 20;
{
  //   var a5 = 200; // Syntax Error => a has already been declared
  //   console.log(a5);
}
console.log(a5);

// -----------------------------------------------------------------------------
console.log();
var a6 = 20;
{
  let a6 = 200; // Syntax Error => a has already been declared
  console.log(a6);
}
console.log(a6);

// -----------------------------------------------------------------------------
console.log();
console.log('Block scope follows lexical scope');
// Each and every block has its own lexical scope

const a7 = 20;
{
  const a7 = 200;
  {
    const a7 = 2000;
    console.log(a7);
  }
  console.log(a7);
}
console.log(a7);

// -----------------------------------------------------------------------------
console.log();
console.log('Scope rules which are for functions are same for arrow functions');
