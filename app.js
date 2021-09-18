const submit = document.querySelector('.submit');
const cardContainer = document.querySelector('.cardContainer')
let read = document.querySelector('.read');

let bookArray = [];
let dataAttribute = 0;

function book (title, author,read,pages){
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages
}

book.prototype.toggle = function (){
    if (this.read === true) {this.read = false}
    else if (this.read === false) {this.read = true}
}


submit.addEventListener('click', addBookToLibary)

function addBookToLibary(){

    const title =document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pages = document.querySelector('.pages').value
    let read = document.querySelector('.read');

    if (document.querySelector('.read').checked){
        read = true
    }
    else {read = false }

    let newBook = new book (title, author, read, pages)

    bookArray.push(newBook);
   
    document.querySelector('.title').value = ''
    document.querySelector('.author').value = ''
    document.querySelector('.pages').value = ''
    document.querySelector('.read').checked = ''

    renderBook()
}

function renderBook(){

    let card = document.createElement('div');
    card.classList.add('cardStyle')
  
    let title = document.createElement('h3');
    let author = document.createElement('h4');
    let pages = document.createElement('p')
    let read = document.createElement('p')
    let deleteBtn = document.createElement('button');
    let readBtn = document.createElement('readBtn');
    read.classList.add('.readP')

    readBtn.classList.add('readBtn');
    readBtn.textContent = 'Change Read Status';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete Book';

    bookArray.forEach(function (item, index) {
    
        readBtn.addEventListener('click', () =>{
            item.toggle();
            if (item.read === false) {read.textContent = 'Not Read'}
            else { read.textContent = 'Book Read'}
            })
      
    card.setAttribute('data-number', index)
    readBtn.setAttribute('data-button', index)
    let  titleVal = item.title;
    let authorVal = item.author;
    let  pagesVal = item.pages;
    let readVal = item.read;


    title.textContent = titleVal;
    author.textContent = 'Written by ' + authorVal;
    pages.textContent = 'This book has ' + pagesVal + ' pages';
    read.textContent= 'Read? ' + readVal ;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteBtn)
    card.appendChild(readBtn)
    cardContainer.appendChild(card)
});

deleteBtn.addEventListener('click', event =>{
    const cardDelete = event.target.parentElement;
    let data = cardDelete.getAttribute('data-number');
    bookArray.pop(parseInt(data))
    cardContainer.removeChild(cardDelete);})
}

