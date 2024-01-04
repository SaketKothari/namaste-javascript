function x() {
  var a = 1;
  setTimeout(function () {
    // console.log(a);
  }, 1000);
}

x();

// -----------------------------------------------------------------------------
console.log();
function x1() {
  var a1 = 1;
  setTimeout(function () {
    // console.log(a1);
  }, 3000);
  console.log("I'm Batman");
}

x1();

// -----------------------------------------------------------------------------
// Q) Print 1 after 1 sec, print 2 after 2 sec do it till 5
console.log();
function x2() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      //   console.log(i);
    }, i * 1000);
  }
  console.log("I'm Superman");
}

x2();

/* 
    1) Due to closure, function remembers the reference to i not the value
    2) So when the loop runs the first time, it kind of makes the copy of the function 
    3) And attaches a timer and also remembers the reference of i 
    4) Similarly these 5 copies of this function are pointing to same reference of i
    5) JS does not wait for anything it will run the loop again & again and it will not wait for timer to expire
    6) So it will print Superman
    7) When the timer expires it is too late, the value of i became 6
*/

// -----------------------------------------------------------------------------
console.log();
// let has block scope for each and every loop iteration this j is new variable altogether

function x3() {
  for (let j = 1; j <= 5; j++) {
    setTimeout(function () {
      //   console.log(j);
    }, j * 1000);
  }
  console.log('Barry Allen');
}

x3();

// In previous example since variable was of var then function form closure with same variable and 6 is printed

// In this example since variable was of let then function form closure with new variable itself everytime and 1 to 6 is printed

// -----------------------------------------------------------------------------
console.log();
// Interviewer asks you can't use let, use only var
function x4() {
  for (var k = 1; k <= 5; k++) {
    function closure(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    closure(k);
  }
  console.log('Aquaman');
}

x4();

// So using closures we solve this like in the example using closure() function we kind of created a new copy of x evertytime the setTimeout was called

// Everytime this closure() function is called it has a new copy of i in it
