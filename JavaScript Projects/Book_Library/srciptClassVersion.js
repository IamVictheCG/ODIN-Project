class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
        this.addTitle = document.getElementsByClassName("add_title")[0];
        this.addAuthor = document.getElementsByClassName("add_author")[0];
        this.addPublishedYear = document.getElementsByClassName("add_publishedYear")[0];
        this.libraryContainer = document.getElementById("library");
        this.addNewBookModal = document.getElementById("addBook");
        this.displayAddBookModal = document.getElementById("add");
        this.addBookButton = document.getElementById("add_submit");
        this.closeAddBookModal = document.getElementById("close");

        this.initEventListeners();
        this.initializeLibrary();
    }

    initEventListeners() {
        this.displayAddBookModal.addEventListener("click", this.newBookModal.bind(this));
        this.closeAddBookModal.addEventListener("click", this.closeModal.bind(this));
        this.addBookButton.addEventListener("click", this.addBookToLibrary.bind(this));
    }

    newBookModal() {
        this.addNewBookModal.classList.add("motion");
        this.libraryContainer.style.cssText = "grid-column: 1/2;";
    }

    closeModal() {
        this.addNewBookModal.classList.add("motion");
        this.libraryContainer.style.cssText = "grid-column: 1/3;";
        this.addNewBookModal.classList.remove("motion");
    }

    initializeLibrary() {
        const initialBooks = [
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                readingStatus: "Read",
                publishedYear: 1960
            },
            {
                title: "1984",
                author: "George Orwell",
                readingStatus: "Not read",
                publishedYear: 1949
            },
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                readingStatus: "Read",
                publishedYear: 1925
            },
            {
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                readingStatus: "Not read",
                publishedYear: 1951
            },
            {
                title: "Pride and Prejudice",
                author: "Jane Austen",
                readingStatus: "Read",
                publishedYear: 1813
            },
            {
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                readingStatus: "Not read",
                publishedYear: 1937
            },
            {
                title: "Moby-Dick",
                author: "Herman Melville",
                readingStatus: "Not read",
                publishedYear: 1851
            },
            {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                readingStatus: "Read",
                publishedYear: 1954
            },
            {
                title: "The Alchemist",
                author: "Paulo Coelho",
                readingStatus: "Read",
                publishedYear: 1988
            },
            {
                title: "Crime and Punishment",
                author: "Fyodor Dostoevsky",
                readingStatus: "Not read",
                publishedYear: 1866
            },
            {
                title: "Brave New World",
                author: "Aldous Huxley",
                readingStatus: "Read",
                publishedYear: 1932
            },
            {
                title: "The Odyssey",
                author: "Homer",
                readingStatus: "Not read",
                publishedYear: -800
            },
            {
                title: "The Brothers Karamazov",
                author: "Fyodor Dostoevsky",
                readingStatus: "Read",
                publishedYear: 1880
            },
            {
                title: "War and Peace",
                author: "Leo Tolstoy",
                readingStatus: "Not read",
                publishedYear: 1869
            },
            {
                title: "Les Misérables",
                author: "Victor Hugo",
                readingStatus: "Not read",
                publishedYear: 1862
            },
            {
                title: "Jane Eyre",
                author: "Charlotte Brontë",
                readingStatus: "Read",
                publishedYear: 1847
            },
            {
                title: "Wuthering Heights",
                author: "Emily Brontë",
                readingStatus: "Read",
                publishedYear: 1847
            },
            {
                title: "The Divine Comedy",
                author: "Dante Alighieri",
                readingStatus: "Not read",
                publishedYear: 1320
            },
            {
                title: "Don Quixote",
                author: "Miguel de Cervantes",
                readingStatus: "Not read",
                publishedYear: 1605
            },
            {
                title: "Frankenstein",
                author: "Mary Shelley",
                readingStatus: "Read",
                publishedYear: 1818
            },
            {
                title: "The Picture of Dorian Gray",
                author: "Oscar Wilde",
                readingStatus: "Read",
                publishedYear: 1890
            },
            {
                title: "Dracula",
                author: "Bram Stoker",
                readingStatus: "Not read",
                publishedYear: 1897
            },
            {
                title: "The Old Man and the Sea",
                author: "Ernest Hemingway",
                readingStatus: "Read",
                publishedYear: 1952
            },
            {
                title: "The Iliad",
                author: "Homer",
                readingStatus: "Not read",
                publishedYear: 750
            },
            {
                title: "The Grapes of Wrath",
                author: "John Steinbeck",
                readingStatus: "Read",
                publishedYear: 1939
            }
        ];

        this.myLibrary.push(...initialBooks);
        this.renderLibrary();
    }

    addBookToLibrary() {
        const newBook = new Book(
            this.addTitle.value,
            this.addAuthor.value,
            this.addPublishedYear.value
        );
        this.myLibrary.push(newBook);
        this.libraryContainer.innerHTML = "";
        this.renderLibrary();
    }

    renderLibrary() {
        this.libraryContainer.innerHTML = ""; // Clear existing content

        this.myLibrary.forEach((book) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("h2");
            title.classList.add("title");
            title.textContent = book.title;

            const author = document.createElement("h3");
            author.classList.add("author");
            author.textContent = `By ${book.author}`;

            const publishedYear = document.createElement("p");
            publishedYear.textContent = `Published Year: ${book.publishedYear}`;

            const img = document.createElement("img");
            img.src = "./assets/undefined - Imgur.png"; // Placeholder image
            img.alt = `Thumbnail for ${book.title}`;

            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(author);
            card.appendChild(publishedYear);

            this.libraryContainer.appendChild(card);
        });
    }
}

// Initialize the library
const myLibrary = new Library();
