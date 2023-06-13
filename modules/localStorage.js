import { addNewBook } from './addRemoveBook.js';

const loadFromLocalStorage = () => {
  let Books;

  if (localStorage.getItem('BooksInfo')) {
    Books = JSON.parse(localStorage.getItem('BooksInfo'));
  } else {
    Books = [];
  }
  return Books;
};

const displayBooksOnPage = () => {
  const Books = loadFromLocalStorage();

  Books.forEach((book) => {
    addNewBook(book);
  });
};

const removeFromLocalStorage = (element) => {
  let k = 0;
  const Books = loadFromLocalStorage();
  const idd = element.parentElement.id;
  const newID = Number(idd);
  for (let i = 0; i < Books.length; i += 1) {
    if (Books[i].id === newID) {
      k = i;
      break;
    }
  }
  Books.splice(k, 1);
  localStorage.setItem('BooksInfo', JSON.stringify(Books));
};

export { loadFromLocalStorage, displayBooksOnPage, removeFromLocalStorage };