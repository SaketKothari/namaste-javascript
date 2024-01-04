// The shortest JS program is empty file. Because even then, JS engine does a lot of things. As always, even in this case, it creates the GEC which has memory space and the execution context

// If we create any variable in the global scope, then the variables get attached to the global object but if we create any variable/function inside any function then that variable is not attached to the global object

// Anything which is not inside the function is global space

var a = 10;
function b() {
  var x = 10;
}

console.log(window.a); // 10
console.log(a); // 10
console.log(this.a); // 10
console.log(x); // Error - x is not defined because it tries to find x inside the global scope
