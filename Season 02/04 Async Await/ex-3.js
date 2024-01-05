const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value');
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value');
  }, 5000);
});

async function handlePromise() {
  console.log('Hello');

  const val = await p1;
  console.log('Batman');
  console.log(val);

  const val2 = await p2;
  console.log('Batman - 2');
  console.log(val2);
}

handlePromise();
