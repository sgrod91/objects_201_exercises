var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker'
};
var superman = {
  name: 'Superman',
  realName: 'Clark Kent'
};

function sayHi() {
  console.log('I am ' + this.name + '!');
}

//Attatches spiderman and superman to sayHi function
superman.sayHi = sayHi;
spiderman.sayHi = sayHi;

//Calls sayHi as method calls
superman.sayHi();
spiderman.sayHi();

function revealIdentify() {
  console.log('My real name is ' + this.realName + '.');
}

// var spiderman = {name: 'Spiderman' };
// var superman = {name: 'Superman' };
revealIdentify.apply(spiderman);
revealIdentify.apply(superman);
