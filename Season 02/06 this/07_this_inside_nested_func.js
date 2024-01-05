const obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj.x();
