console.log('Callback function');

function x(y) {}

x(function y() {}); // y is the callback function

// -----------------------------------------------------------------------------
console.log();
console.log('Example of setTimeout');

setTimeout(function () {
  console.log('After 5 sec');
}, 5000);

function x1(y1) {
  console.log('x1');
  y1();
}

x1(function y1() {
  console.log('y1');
});

// -----------------------------------------------------------------------------
console.log();
console.log('Event Listener In JavaScript');

// document
//   .getElementById('clickMe')
//   .addEventListener('click', function clickButton() {
//     console.log('Button Clicked');
//   });

// -----------------------------------------------------------------------------
console.log();
console.log('Closures with Event Listeners');

function attachEventListener() {
  let count = 0;
  document
    .getElementById('clickMe')
    .addEventListener('click', function clickButton() {
      console.log('Button Clicked ' + ++count + ' times');
    });
  return count;
}

const a = attachEventListener();

// -----------------------------------------------------------------------------
console.log();
console.log('Garbage collection and remove event listener');

// Event listeners are heavy as they form closures. So even when call stack is empty, Event listener won't free up memory allocated to count as it doesn't know when it may need count again. So we remove event listeners when we don't need them (garbage collected) onClick, onHover, onScroll all in a page can slow it down heavily
