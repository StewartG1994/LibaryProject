const submit = document.querySelector('.submit');
const cardContainer = document.querySelector('.cardContainer')


let bookArray = [];
let dataAttribute = 0;

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
    let newBook = new book (title, author, read, pages)
    bookArray.push(newBook);

    document.querySelector('.title').value = ''
    document.querySelector('.author').value = ''
    document.querySelector('.pages').value = ''
    document.querySelector('.read').value = ''
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
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete Book';

    bookArray.forEach(function (item, index) {
    
    card.setAttribute('data-number', index)
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
    cardContainer.appendChild(card)


  
  
});


deleteBtn.addEventListener('click', event =>{
    const cardDelete = event.target.parentElement;
    let data = cardDelete.getAttribute('data-number');
    console.log(data)
    bookArray.pop(parseInt(data))
    console.log(bookArray)
    cardContainer.removeChild(cardDelete);})
}

