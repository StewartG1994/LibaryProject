const submitButton = document.querySelector('.submit');
const bookList = document.querySelector('.center');

let myLibary = [];

function book(title, author, pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
    
    

function addBookToLibary (book) {
    
     myLibary.push(book);  
}

submitButton.addEventListener('click', event =>{

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pages = document.querySelector('.pages').value;
    const read = document.querySelector('.read').value;

const newBook = new book(title,author,pages,read);
const newBookTitle = title + " " + author + " "+ pages+ " " + read;



const newCard = document.createElement('div')
const deleteBtn = document.createElement('button');
const bookTitle = document.createElement('h3');
const bookInfo = document.createElement('p');
bookInfo.textContent = 'This book was written by ' + author + ' and has '+ pages + ' pages';
bookTitle.textContent = title;
deleteBtn.textContent = 'Delete Book';
newCard.classList.add('card');
bookList.appendChild(newCard);
newCard.appendChild(bookTitle)
newCard.appendChild(bookInfo);
newCard.appendChild(deleteBtn);


deleteBtn.addEventListener('click', event =>{
    const cardDelete = event.target.parentElement;
    bookList.removeChild(cardDelete);
})

console.log(newCard);

addBookToLibary(newBookTitle);


})

