let myLibrary = [];
console.log(myLibrary)

function Book(Title,Author,Pages,ReadBy,Status){
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.ReadBy = ReadBy;
  this.Status = Status;
}

// add book to library
function addToLibrary(Title,Author,Pages,ReadBy,Status){
  let book = new Book(Title,Author,Pages,ReadBy,Status);
  myLibrary.push(book);
  // CollectInput()
  // displayBookToPage()
}

// display book to dom
function displayBookToPage(){
  const domtitle = document.querySelector('.domtitle');
  const domauthor = document.querySelector('.domauthor');
  const dompages = document.querySelector('.dompages');
  const domreader = document.querySelector('.domreader');
  const domread = document.querySelector('.domread');

  // domtitle.textContent += myLibrary[0]['title'];
  // domauthor.textContent += myLibrary[0]['Author'];
  // dompages.textContent += myLibrary[0]['Pages'];
  // domread.textContent += myLibrary[0]['Status'];
  // domreader.textContent += myLibrary[0]['ReadBy'];

  // myLibrary.forEach(myLibrary => {
  //   for(key in myLibrary){
  //     Book[key] = domtitle
  //   }
  // })
}


// user book input open and close
function openUserInput(){
  const addnewbook = document.getElementById('addnewbook');
  const userbookinputdiv = document.getElementById('book-input');
  const userclosenewbook = document.getElementById('closenewbook');

  addnewbook.addEventListener('click', () => {
  userbookinputdiv.style.display = 'block'
});

  userclosenewbook.addEventListener('click', () => {
  userbookinputdiv.style.display = 'none'
});
}

// collect user input
function CollectInput(Title,Author,Pages,ReadBy,Status) {
  Title = document.getElementById('title').value;
  Author = document.getElementById('author').value;
  Pages = document.getElementById('pages').value;
  ReadBy = document.getElementById('readername').value;
  Status = document.getElementById('readbook').value;

}

addToLibrary()
displayBookToPage()
openUserInput()
// console.log(CollectInput())