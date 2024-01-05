const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value');
  }, 10000);
});

// Basic approach
function getData() {
  p.then((res) => console.log(res));
  console.log('Batman using normal function');
}

getData();

// Using async await
async function handlePromise() {
  console.log('Hello');
  const val = await p;
  console.log('Batman');
  console.log(val);

  const val2 = await p;
  console.log('Batman - 2');
  console.log(val2);
}

handlePromise();
