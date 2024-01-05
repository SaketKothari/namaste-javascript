// Callbacks are a powerful way of handling async operations in JS

// Issues with callbacks with an ex
const cart = ['tshirts', 'shoes', 'protein'];

/*
2 steps to place a order
1. Create a Order
2. Proceed to Payment

Assumption, once order is created then only we can proceed to payment, so there is a dependency. So how to manage this dependency. Callback can come into picture

So we wrap our proceedToPayment api in an callback function and that callback function will be pass along with cart item to these createOrder api
*/

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

/*
2 problems
1) This is Callback Hell - One callback inside another callback inside another
Also called Pyramid of Doom

2) Inversion of control - is like that you lose the control of our code when using callbacks.

api.createOrder(cart, function () {
 api.proceedToPayment();
});

So over here, we are creating a order and then we are blindly trusting `createOrder` to call `proceedToPayment`.

It is risky, as `proceedToPayment` is important part of code and we are blindly
trusting `createOrder` to call it and handle it.

When we pass a function as a callback, basically we are dependant on our parent
function that it is his responsibility to run that function. This is called `inversion of control` because we are dependant on that function. 

What if parent function stopped working, what if it was developed by another programmer or callback called twice or never called at all.
*/
