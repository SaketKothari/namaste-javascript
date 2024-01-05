const superhero = {
  name: 'Batman',
  printName: function () {
    console.log(this.name);
  },
};

superhero.printName();

const superhero2 = {
  name: 'Spiderman',
};

console.log('Sharing method using call example:-');
superhero.printName.call(superhero2);
