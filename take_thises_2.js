function createPerson(name) {
  var person = {
    name: name,
    friends: []
  };

  person.greet = function(other) {
    console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
  };
  person.lazyGreet = function() {
    var person = {
      name: name
    };
    setTimeout(function() {
      console.log('Hello, I am ' + this.name + '.');
    }.bind(this), 2000);
  };

  return person;
}

var steven = createPerson('Steven');
var vince = createPerson('Vince');



Person.prototype.createGreetingsForFriends = function() {
  return this.friends.map(function transform(friend) {
    var allGreetings = this.createGreeting(friend);
    var greeting = this.createGreeting(friend);
    return greeting;
  }.bind(this));
};

var ilene = new Person('Ilene');
var debra = new Person('Debra');
var blake = new Person('Blake');
ilene.addFriend(debra);
debra.addFriend(ilene);

var array = ilene.createGreetingsForFriends();
console.log(array);
