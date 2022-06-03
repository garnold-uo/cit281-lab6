// CIT 281 Lab 6
// Garrett Arnold

class Book {
  constructor(title, author, pubDate, isbn) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}

class Library {
    constructor(name) {
        this._name = name;
        this._books = [];
    }
    get books() {
    // Return copy of books
        return JSON.parse(JSON.stringify(this._books));
    }

    get count() {
        return this._books.length;
    }

    addBook(book = {}) {
        const { title = "", author = "", pubDate = "", isbn = "" } = book;
        if (title.length > 0 && author.length > 0) {
            const newBook = { title, author, pubDate, isbn};
            this._books.push(newBook);
      }
    }
    
    listBooks() {
        for (const book of this._books) {
            const {title, author, pubDate, isbn} = book;
            console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
        }
    }
    deleteBook(isbn) {
        this._books = this._books.filter(book => book.isbn !== isbn);
    }
}

// Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const harryPotter = new Book("Harry Potter and the Philsospher's Stone", "J.K. Rowling", "6/26/1997", "9780747532743");
const huckFinn = new Book ("The Adventures of Huckleberry Finn", "Mark Twain", "2/18/1885", "9780486280615")


// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(harryPotter);
library.addBook(huckFinn);
console.log(`Book count: ${library.count}`);

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("0735211299");
library.listBooks();
