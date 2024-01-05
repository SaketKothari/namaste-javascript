const cart = ['tshirts', 'shoes', 'protein'];

// Example 1
// Below two functions are asynchronous and dependent on each other
createOrder(cart, function () {
  proceedToPayment(orderId);
});

/*
Above there is the issue of `Inversion of Control
So how to fix => Using promises

Promise is nothing but we can assume it to be empty object with some data value in it, and this data value will hold whatever this createOrder function will return.

Since createOrder() is an async function and we don't know how much time will it take to finish execution.

// ----------------------------------------------------------------------------
Example 2
As soon as this line is executed, it will return us an promise with -
{data: undefined} means empty value/object
*/
const promise = createOrder(cart);

/*
Q: How we will get to know response is ready?
A: So, we will attach a callback function to the promise object using then() to get triggered automatically when result is ready.
*/
promise.then(function (orderId) {
  proceedToPayment(orderId);
});

/* 
Let's say after certain point of time, this {data: } is filled with exact data that we return by createOrder()
{data: orderId}

Once we have this data inside promise object, this callback function that we attach to this promise object will be automatically called.

In callback hell => we are passing callback function to another function
In this ex using promises => we are attaching a callback func to promise obj
*/

/* 
So promises working -
1) createOrder() will create an Order and it will fill the promise object with the data the orderId.
2) As soon as promise object is filled with data it will automatically called our callback function

Advantage - We have the control of our program with us
*/

// ----------------------------------------------------------------------------
const GITHUB_API = 'https://api.github.com/users/SaketKothari';

// fetch returns us a promise so we will get promise object in user
const user = fetch(GITHUB_API);
console.log(user); // Promise {<pending>}

/* In console it is pending state but when we see the PromiseState it is fulfilled why ?
Ans) As JS waits for none it will print the user when the promise is in pending state and after the async operation is done, promise object comes, it  fulfilled it
*/
user.then(function (data) {
  console.log(data);
});

// ----------------------------------------------------------------------------
console.log();
console.log('Promise Chaining in JavaScript');

// Callback Hell Example - Solution using promise chain
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (balance) {
      updateWalletBalance();
    });
  });
});

createOrder
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then((balance) => updateWalletBalance(balance));

// ----------------------------------------------------------------------------
console.log();
console.log('Common mistake while Promise Chaining');

// Whenever you are attaching a lot of then() function in lot of callbacks, what happens is we used to pipe the data. Always return a promise from a promise when we are chaining it. So that's when we get data properly in chain
