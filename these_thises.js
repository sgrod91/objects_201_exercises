//lazygreet
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


steven.lazyGreet(vince);
