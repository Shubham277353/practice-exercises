function Player(name , marker){
  if(!new.target){
    throw Error("You must use the new keyword to call the constructor")
  }

  this.name = name; 
  this.marker=marker;
  this.sayName = ()=> console.log(this.name);
}

let player = new Player("Steve", "x");
let player2 = new Player("GoluBoi","o");
player.sayName();
player2.sayName();