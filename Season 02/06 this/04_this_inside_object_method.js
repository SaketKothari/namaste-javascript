const obj = {
  a: 10,
  x: function () {
    console.log(this);
    console.log(this.a);
  },
};

obj.x();
