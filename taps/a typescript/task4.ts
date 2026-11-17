type Book = {
    id: number,
    title: string,
    author: string,
    pages: number,
    available: boolean,
    genre?: string
}

const books: Book[] = [{
    id: 1,
    title: "Demons",
    author: "Fyodor Dostoevsky",
    pages: 700,
    available: true,
    genre: "political novel"
}, {
    id: 2,
    title: " no longer human",
    author: "Dazai Osamu",
    pages: 192,
    available: false
},
{
    id: 3,
    title: "Tamerlane",
    author: "Edgar Allan Poe",
    pages: 1827,
    available: true
}];

const availableBooks = books.filter(book => book.available);
console.log("Movcud Kitablar", availableBooks);
