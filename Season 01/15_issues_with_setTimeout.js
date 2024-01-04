console.log('Start');

setTimeout(function cb() {
  console.log('Callback - example 1');
}, 5000);

console.log('End');
// Suppose we've millions of line here which takes suppose 10sec of time to execute

// Global execution context in call stack won't go out before 10sec but our setTimeout timer 5sec expires
// This is called concurrency model in JS

// -----------------------------------------------------------------------------
// We're blocking the main thread
console.log();
console.log('Code demonstration of the setTimeout delay');

console.log('Start');

setTimeout(function cb() {
  console.log('Callback - example 2');
}, 5000);

console.log('End');

// millions of lines of code

// we will get the current date and exact time in milliseconds
let startDate = new Date().getTime();
let endDate = startDate;

// This loop will keep on updating the endDate with the present date and wait for 10sec
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log('While loop expires');

// -----------------------------------------------------------------------------
console.log();
console.log('setTimeout(0)');

console.log('Start');

setTimeout(function cb() {
  console.log('Callback - example 3');
}, 0);

console.log('End');

/* 
or
console.log('Start');
function cb() {
  console.log('Callback - example 3');
}
setTimeout(cb, 0);
console.log('End');
*/
