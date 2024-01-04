// Case 1
getName();
console.log(x);
console.log(getName);

var x = 7;
function getName() {
  console.log('Batman');
}

// -----------------------------------------------------------------------------
console.log();

// Case 2
getName2();
// console.log(x2);   // Error x2 is not defined
console.log(getName2);

function getName2() {
  console.log('Superman');
}

// -----------------------------------------------------------------------------
console.log();

// Case 3
getName3();
console.log(x3);
console.log(getName3);

var x3 = 7;
var getName3 = () => {
  console.log('Spiderman');
};

// In case of arrow function, getName3() behaves as a variable not a function or if we define it like this also in this case also getName4() behaves as a variable not a function

/*
    var getName4 = function() {
        console.log("Batman");
    }
*/
