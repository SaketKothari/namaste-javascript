async function getData() {
  return 'Batman';
}

const dataPromise = getData();
dataPromise.then((result) => console.log(result));

// ----------------------------------------------------------------------------
// async ex - 2

const p = new Promise((resolve, reject) => {
  resolve('Promise resolved value - ex 2');
});

async function getData2() {
  return p;
}

const dataPromise2 = getData2();
dataPromise2.then((res) => console.log(res));

// ----------------------------------------------------------------------------
// Handling promises before async-await
const p3 = new Promise((resolve, reject) => {
  resolve('Promise resolved value - ex 3');
});

function getData3() {
  p3.then((res3) => console.log(res3));
}

getData3();

// ----------------------------------------------------------------------------
// Handling promises with async-await

const p4 = new Promise((resolve, reject) => {
  resolve('Promise resolved value - ex 4');
});

async function handlePromise() {
  const val = await p4;
  console.log(val);
}

handlePromise();
