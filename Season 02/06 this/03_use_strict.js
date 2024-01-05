'use strict';

console.log(this);

function x() {
  console.log(this);
}

x();
window.x();
