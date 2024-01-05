const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P1 Success'), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P2 Success'), 5000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject('P3 Failed'), 2000);
});

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
