const submit = document.querySelector('.submit');
const cardContainer = document.querySelector('.cardContainer')

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

    bookArray.forEach(function (item, index) {

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
    cardContainer.appendChild(card)

    console.log(titleVal, authorVal, pagesVal, readVal)

});

}

