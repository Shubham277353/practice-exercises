function Books(title, authorName, numberOfPages, finished) {
  this.title = title;
  this.authorName = authorName;
  this.numberOfPages = numberOfPages;
  this.finished = finished;
  this.bookInfo = () => {
    return `The ${this.title} by ${this.authorName}, ${
      this.numberOfPages
    } pages, ${this.finished ? "read" : "not read yet"}`;
  };
}

let book = new Books("Hobbit", "J.R.R Tolkien", 295, false);
let book2 = new Books("Kite RUnner", "Khalid Husseni", 300, true);
let book3 = new Books("Digital Fortress", "Dan Brown", 400, true);
console.log(book.bookInfo());
console.log(book2.bookInfo());
console.log(book3.bookInfo());