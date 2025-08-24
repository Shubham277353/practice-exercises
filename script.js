function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

Player.prototype.sayHello = function(){
  console.log("Hello , " + this.name)
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

Object.getPrototypeOf(Player.prototype);


