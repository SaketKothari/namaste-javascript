const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj.x();
