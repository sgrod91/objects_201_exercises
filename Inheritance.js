var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

//makes daughter inherit properties from mom//
daughter.__proto__ = mom;
console.log(daughter.eyeColor);

//adds method to mom by attatching a function to it as a property//
mom.showInfo = function() {
  console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
};

//calls the previous method on both mom and daughter//
mom.showInfo();
daughter.showInfo();
//
//
//
//
//#5

//inline greet method//
function Person(name) {
  this.name = name;
  this.friends = [];
  this.greet = function() {
    console.log(this.createGreeting(other));
  };

  this.addFriend = function(friend) {
    this.friends.push(friend);
  };

  this.createGreeting = function(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  };
}



//factory function form//
function createPerson(name) {
  var person = {
    name: name

  };

  person.greet = function(other) {
    console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
  };

return person;
}


var steven = createPerson('Steven');
var vince = createPerson('Vince');

steven.greet(vince);
