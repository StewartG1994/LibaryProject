
const submitButton = document.querySelector('.submit');
const bookReadBtn = document.querySelector('.read');
submitButton.addEventListener('click', addBookToLibary)

const myLibary = [];



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

function book(title, author, pages,read) {
    this.title = title.value 
    this.author = author.value 
    this.pages = pages.value 
    this.read = read 
    }


function addBookToLibary (){

    const title = document.querySelector('.title')
    const author = document.querySelector('.author')
    const pages = document.querySelector('.pages');
    const read =  bookReadBtn.checked;

    const newBook = new book (title,author,pages,read)
    myLibary.push(newBook);
    rtnDefault()
    display()
    bookReadBtn.checked = false;

}

function display (){
    

    for (let i = 0; i< myLibary.length; i++)
    {
    populate(myLibary[i])
    }

}


console.log(myLibary)



function populate(book){

const bookList = document.querySelector('.center')
const newCard = document.createElement('div');
const bookTitle = document.createElement('h3');
const bookInfo = document.createElement('p');
const readOrNot = document.createElement('button');
bookList.appendChild(newCard);


bookTitle.textContent = book.title;
newCard.appendChild(bookTitle)

bookInfo.textContent ='Written by ' + book.author + ' with ' + book.pages + 'pages';
newCard.appendChild(bookInfo);


if(book.read === false ){ readOrNot.textContent = 'Not Read'}
else {readOrNot.textContent = 'Read'};
newCard.appendChild(readOrNot);


newCard.classList.add('card');






 

}
