    const myLibrary = [];
    let addTitle = document.getElementsByClassName("add_title");
    let addAuthor = document.getElementsByClassName("add_author");
    let addPublishedYear = document.getElementsByClassName("add_publishedYear");
    let library = document.getElementById("library");
    let addNewBookModal = document.getElementById("addBook")
    console.log(addNewBookModal);
    let displayAddBookModal = document.getElementById("add")
    let addBook = document.getElementById("add_submit")
    let closeAddBookModal = document.getElementById("close")
    // addNewBookModal.classList.remove("motion")
    // library.classList.remove("libraryMotion")



    function newBookModal() {
        addNewBookModal.classList.add("motion")
        library.style.cssText = "grid-column: 1/2;";
    }
    displayAddBookModal.addEventListener("click", newBookModal)

    closeAddBookModal.addEventListener("click", function() {
        addNewBookModal.classList.add("motion");
        // addNewBookModal.style.cssText = "transform: translateX(2000px);"
        library.style.cssText = "grid-column: 1/3;";
        addNewBookModal.classList.remove("motion");
        
        // addNewBookModal.addEventListener("animationend", () => {
        //     console.log("ended");
        // });

    })

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
            publishedYear: -750
        },
        {
            title: "The Grapes of Wrath",
            author: "John Steinbeck",
            readingStatus: "Read",
            publishedYear: 1939
        }
    ];
    console.log(initialBooks.length);

    // Add books to the library
    myLibrary.push(...initialBooks);
    console.log(myLibrary);

    function Book(title, author, publishedYear) {
        // Constructor for creating new book objects
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    function addBookToLibrary() {
        // Add a new book to the library
        console.log(addTitle[0].value);
        var book = new Book(addTitle[0].value, addAuthor[0].value, addPublishedYear[0].value);
        myLibrary.push(book);

        library.innerHTML = ""
        renderLibrary();
        console.log(myLibrary);
    }
    addBook.addEventListener("click", addBookToLibrary)


    console.log(myLibrary);
    function renderLibrary() {
        // Loop through the library and create cards for each book
        for (let i = 0; i < myLibrary.length; i++) {
            const card = document.createElement("div");
            card.classList.add("card");
        
            // Create the title
            const title = document.createElement("h2");
            title.classList.add("title");
            title.textContent = myLibrary[i].title;
        
            // Create the published year
            const publishedYear = document.createElement("p");
            publishedYear.textContent = `Published Year: ${myLibrary[i].publishedYear}`;
        
            // Create the author
            const author = document.createElement("h3");
            author.classList.add("author");
            author.textContent = `By ${myLibrary[i].author}`;
        
            // Create the image
            const img = document.createElement('img');
            img.src = "./assets/undefined - Imgur.png"; // Placeholder image
            img.alt = `Thumbnail for ${myLibrary[i].title}`;
        
            // Append all the elements to the card
            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(author);
            card.appendChild(publishedYear);
        
            // Append the card to the library container
            library.appendChild(card);
        }
    };

    renderLibrary()