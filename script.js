class Product {
  constructor(name,price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price}`);
  }

  calculatePrice(){
    return this.price + (this.price*(18/100));
  }
}

const product1 = new Product("Shirt",300);
const product2 = new Product("Pants",550);
const product3 = new Product("Underwear",150);


product1.displayProduct();
console.log(product1.calculatePrice());