const BooksContainer = document.querySelector('.book-container');
const bookslisth2 = document.querySelector('.books-list-h2');
const formInfo = document.querySelector('form');
const contact = document.querySelector('.contact-section');

export function displayBookList() {
  BooksContainer.classList.add('active');
  bookslisth2.classList.add('active');
  formInfo.classList.remove('active');
  contact.classList.remove('active');
}
export function displayFormSection() {
  bookslisth2.classList.remove('active');
  formInfo.classList.add('active');
  BooksContainer.classList.remove('active');
  contact.classList.remove('active');
}
export function displayContactSection() {
  contact.classList.add('active');
  bookslisth2.classList.remove('active');
  BooksContainer.classList.remove('active');
  formInfo.classList.remove('active');
}