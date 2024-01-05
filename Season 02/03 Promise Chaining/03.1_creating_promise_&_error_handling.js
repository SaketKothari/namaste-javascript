const cart = ['tshirts', 'shoes', 'protein'];

// Consuming promises
const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Creating a promise - Producer(create our own createOrder() which will return a promise)
function createOrder(cart) {
  // This is a Promise constructor which takes a function
  // resolve and reject are the func which are given by JS to build promises
  const promiseObj = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid');
      reject(err);
    }

    // Logic for handling createOrder()
    const orderId = '98';
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return promiseObj;
}

function validateCart(cart) {
  return true;
}
