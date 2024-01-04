// console is Web API which is plugged through window object to this code
console.log('Start');

setTimeout(function cb() {
  console.log('Callback - After 5 sec');
}, 5000);

console.log('End');

// -----------------------------------------------------------------------------
console.log();
console.log('How Event Listeners Work in JS');

console.log('Start-1');

// document is Web API called DOM API which fetches from the DOM
document.getElementById('clickMe').addEventListener('click', function cb() {
  console.log('Callback');
});

console.log('End-1');

// -----------------------------------------------------------------------------
console.log();
console.log('fetch() function works');

console.log('Start-2');

setTimeout(function cbTimeout() {
  console.log('Callback SetTimeout');
}, 5000);

fetch('https://api.netflix.com').then(function cbFetch() {
  console.log('Callback fetch Netflix');
});

console.log('End-2');
