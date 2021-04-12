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



function readBtnToggle(readBtn){

    readBtn.addEventListener('click', event =>
    {
        const currentValue = event.target.textContent;
        console.log(currentValue);
    
       if ( currentValue == 'Read') { readBtn.textContent = 'Unread'}
       else if ( currentValue =='Unread') { readBtn.textContent = 'Read'}
    
    })}

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


function stopDef(){
   
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');

title.addEventListener('click', event => {
title.value = " " ;
 })

author.addEventListener('click', event => {
author.value = " " ;
})
pages.addEventListener('click', event => {
pages.value = " " ;
})
}
stopDef()

function rtnDefault (){
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const pages = document.querySelector('.pages');
    pages.value = 'Enter Pages';
    title.value = 'Enter Title';
    author.value = 'Enter Author';
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
const readBtn = document.createElement('button');

bookInfo.textContent = 'This book was written by ' + author + ' and has '+ pages + ' pages';
bookTitle.textContent = title;
deleteBtn.textContent = 'Delete Book';
readBtn.textContent = read;

newCard.classList.add('card');
readBtn.classList.add('button')
bookList.appendChild(newCard);
newCard.appendChild(bookTitle)
newCard.appendChild(bookInfo);
newCard.appendChild(deleteBtn);
newCard.appendChild(readBtn);
deleteBtn.classList.add('deletebtn');

rtnDefault ()
readBtnToggle(readBtn);

deleteBtn.addEventListener('click', event =>{
    const cardDelete = event.target.parentElement;
    bookList.removeChild(cardDelete);
})

addBookToLibary(newBookTitle);
console.log(myLibary);


})

//