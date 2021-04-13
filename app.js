
const submitButton = document.querySelector('.submit');
const bookReadBtn = document.querySelector('.read');
submitButton.addEventListener('click', addBookToLibary)

const myLibary = ['test', 'yee', 'oke'];


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
    console.log(myLibary[i])
    }
    
}

display()