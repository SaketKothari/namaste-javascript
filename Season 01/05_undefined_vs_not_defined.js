console.log(a); // undefined
var a = 7;
console.log(a); // 7
console.log(x); // Not defined

// -------------------------------------------------------------------------
console.log();

var batman;
console.log(batman); // undefined
batman = 'Bruce Wayne';

if (batman === undefined) {
  console.log('Batman variable is undefined');
} else {
  console.log('Batman variable is not undefined'); // ✔️
}

// -------------------------------------------------------------------------

// Never do this
var superman = undefined;
console.log(superman);
