const BooksContainer = document.querySelector('.book-container');

const addNewBook = (book) => {
  const booksInfo = document.createElement('div');
  booksInfo.className = 'book-info';
  booksInfo.id = book.id;
  booksInfo.innerHTML = `
          <ul>
            <li class="book-title">"${book.title}" </li>
            <li> by </li>
            <li class="book-auhtor">${book.author}</li>
          </ul>
          <button class="remove-book">Remove</button>
      `;

  BooksContainer.appendChild(booksInfo);
};

const removeBookFromPage = (target) => {
  if (target.classList.contains('remove-book')) {
    target.parentElement.remove();
  }
};
export { addNewBook, removeBookFromPage };