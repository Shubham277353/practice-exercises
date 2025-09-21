class Product {

  #salary;

  constructor(name,price,salary){
    this.name = name;
    this.price = price;
    this.#salary = salary ;
  }

  get name(){
    return this._name;
  }

  set name(value){
    if(value.lenght < 4){
      alert("Name to short");
      return;
    }
    this._name = value  ;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price}`);
    console.log(`salary: ${this.#salary}`);
  }

  calculatePrice(){
    return this.price + (this.price*(18/100));
  }
}

class Recipt extends Product {
}

const product1 = new Recipt("Shirt",300,100000);
const product2 = new Product("Pants",550);
const product3 = new Product("Underwear",150);


product1.displayProduct();
// console.log(product1.calculatePrice());

