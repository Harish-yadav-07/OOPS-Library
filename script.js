//                     *********** LIBRARY ************


class Library {
    constructor() {
        this.books = [];  // saaro books ka record yaha par hai 
    }
    addBooks(books) {
        this.books.push(...books);
    }
    listAllBooks() {
        this.books.forEach(function (book, index) {
            console.log(`${index + 1}) ${book.name} by ${book.author}`);
        });
    }
}

class Book {
    constructor(name, isbn, price, author) {
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;
    }

    info() {
        console.log(
            `${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ? "read it" : "not read it"} and it's available at Amazon at a price range of ${this.price}`
        );
    }

    changeReadStatus() {
        this.readStatus = !this.readStatus;
    }
}

let GurgaonLibrary = new Library();

let book1 = new Book("The Psychology of Money", "9789390166268", 1000, '"Morgan Housel"');
let book2 = new Book("Deep Work", "9781455586691", 1400, '"Cal Newport"');
let book3 = new Book("The Subtle Art of Not Giving a F*ck", "9780062457714", 1300, '"Mark Manson"');
let book4 = new Book("Rich Dad Poor Dad", "9781612680194", 1000, '"Robert T. Kiyosaki"');
let book5 = new Book("Think and Grow Rich", "9780449214923", 800, '"Napoleon Hill"');
let book6 = new Book("The Power of Now", "9781577314806", 1200, '"Eckhart Tolle"');
let book7 = new Book("Can't Hurt Me", "9781544512280", 1600, '"David Goggins"');
let book8 = new Book("Ikigai", "9780143130727", 900, '"Héctor García & Francesc Miralles"');
let book9 = new Book("The 7 Habits of Highly Effective People", "9780743269513", 1400, '"Stephen R. Covey"');
let book10 = new Book("Make Your Bed", "9781455570249", 700, '"Admiral William H. McRaven"');

GurgaonLibrary.addBooks([book1, book2, book3, book4, book5, book6, book7, book8, book9, book10]);

GurgaonLibrary.listAllBooks();


//                          ***********  MOBILE SHOP  **********

class MobileShop {
    constructor() {
        this.mobiles = [];
    }

    addMobile(mobile) {
        this.mobiles.push(...mobile);
    }

    listAllMobiles() {
        this.mobiles.forEach(function (mb, index) {
            console.log(
                `${index + 1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`
            );
        });
    }
}

class Mobile {
    constructor(brand, model, price, color) {
        this.id = Math.floor(Math.random() * 100000);
        this.model = model;
        this.color = color;
        this.brand = brand;
        this.price = price;
        this.sims = [];
    }
    getMobileInfo() {
        console.log(
            `${this.brand} - ${this.model} = ${this.price} - ${this.color}`
        );
    }
    insertSim(sim) {
        if (this.sims.length === 2) {
            console.log("sorry you already have 2 sims installed.");
            return;
        }
        this.sims.push(sim);
    }
}

class Sim {
    constructor(brand, balance) {
        this.brand = brand;
        this.balance = balance;
    }
    addBalance(balance) {
        if (balance < 0) {
            console.log("to add balance give amount greater than 0");
            return;
        }
        this.balance += balance;
    }
}

let myMobileShop = new MobileShop();
let samsung = new Mobile("Samsung", "Galaxy S25 Ultra", 120000, "black");
let apple = new Mobile("Apple", "iPhone 15 Pro Max", 139900, "space black");
let oneplus = new Mobile("OnePlus", "12R", 45999, "iron gray");
let xiaomi = new Mobile("Xiaomi", "Redmi Note 13 Pro+", 31999, "fusion black");
let realme = new Mobile("Realme", "GT 6", 39999, "fluid silver");
let motorola = new Mobile("Motorola", "Edge 50 Ultra", 59999, "forest grey");
let google = new Mobile("Google", "Pixel 8 Pro", 106999, "obsidian");
let iqoo = new Mobile("iQOO", "Neo 9 Pro", 36999, "fiery red");
let vivo = new Mobile("Vivo", "V30 Pro", 41999, "andes green");
let oppo = new Mobile("Oppo", "Reno 11 Pro", 39999, "rock grey");

let Airtel = new Sim("Airtel", 849);

samsung.insertSim(Airtel);
myMobileShop.addMobile([samsung, apple, oneplus, xiaomi, realme, motorola, google, iqoo, vivo, oppo]);
console.log("");

myMobileShop.listAllMobiles();