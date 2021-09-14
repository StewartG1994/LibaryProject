const submit = document.querySelector('.submit');

let bookArray = [];

function book (title, author,read,pages){
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages
}

submit.addEventListener('click', addBookToLibary)

function addBookToLibary(){
    const title =document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pages = document.querySelector('.pages').value
    const read = document.querySelector('.read').value;
    let newBook = new book (title, author, pages, read)
    bookArray.push(newBook);
}
