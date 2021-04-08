const submitButton = document.querySelector('.submit');
const bookList = document.querySelector('.center');
const bookReadBtn = document.querySelector('.read');
const bookNotReadBtn = document.querySelector('.unread');



let myLibary = [];

function book(title, author, pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
    


function isBookRead(){
    let readOrNot ;

    if (bookReadBtn.checked = true && bookNotReadBtn.checked == false)
    {
        readOrNot = bookReadBtn.value
    }
    else { 
        readOrNot = bookNotReadBtn.value
    }
 return readOrNot;
}


function addBookToLibary (book) {
    
     myLibary.push(book);  
}

submitButton.addEventListener('click', event =>{

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pages = document.querySelector('.pages').value;
    const read = isBookRead()

const newBook = new book(title,author,pages,read);
const newBookTitle = title + " " + author + " "+ pages+ " " + read;

bookReadBtn.checked = false;
bookNotReadBtn.checked = false;



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
console.log(read)


deleteBtn.addEventListener('click', event =>{
    const cardDelete = event.target.parentElement;
    bookList.removeChild(cardDelete);
})

console.log(newCard);

addBookToLibary(newBookTitle);


})