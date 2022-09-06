const submit = document.querySelector('.submit');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const title = document.querySelector('#title');
const content = document.querySelector('.content')

let myLibrary = [];

class Book {
  constructor(title,pages,author,read) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.read = read;}
}

function addBookToLibrary(title,pages,author,read) {
  const newBook = new Book(title,pages,author,read)
  myLibrary.push(newBook)
  console.log(myLibrary)
}

submit.addEventListener('click' , () => {

  if (title.value =='' || pages.value == '' || author.value == '' || read.value =='') {return;}
  else{

  addBookToLibrary(title.value, pages.value, author.value, read.value);
  createCards()
 
  title.value = null;
  title.placeholder ='title'
  pages.value = null;
  pages.placeholder = 'pages'
  author.value=null;
  author.placeholder = 'author'
  read.value = null;
  read.placeholder = 'read'
  }}
)

function createCards() {
content.textContent = '';

for(let i = 0; i < myLibrary.length; i++){

    let item = myLibrary[i];
    console.log(myLibrary.indexOf(item))
    let index = myLibrary.indexOf(item)
    let card = document.createElement('div')
    card.setAttribute('cardnu', index)
    card.className = 'card'
    let titleElem = document.createElement('p')
    let pagesElem = document.createElement('p')
    let authorElem = document.createElement('p')
    let readElem  = document.createElement('p')
    let deleteButton = document.createElement("button");
    let readBtn = document.createElement('button');
    readBtn.textContent = item.read;
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteBtn';

    titleElem.textContent = item.title;
    pagesElem.textContent = item.pages;
    authorElem.textContent = item.author;
    readElem.textContent = item.read;
  
    card.appendChild(titleElem)
    card.appendChild(pagesElem)
    card.appendChild(authorElem)
    card.appendChild(readElem)
    card.appendChild(deleteButton)
    card.appendChild(readBtn)
    content.appendChild(card)

    deleteButton.addEventListener('click', event =>{
      let cardDelete = event.target.parentElement;
      let data = cardDelete.getAttribute('cardnu')
      myLibrary.pop(parseInt(data))
      content.removeChild(cardDelete)
    })  
  }
}