import createFormSection from './modules/FormSection.js';
import createContactSection from './modules/ContactSection.js';
import { removeBookFromPage } from './modules/addRemoveBook.js';
import { displayBooksOnPage, removeFromLocalStorage } from './modules/localStorage.js';
import { displayBookList, displayFormSection, displayContactSection } from './modules/SPA.js';

import { DateTime } from './node_modules/luxon/src/luxon.js';

const BooksContainer = document.querySelector('.book-container');

const BooksListLink = document.querySelector('.list-books');
const contactLink = document.querySelector('.contact-me');
const formSectionLink = document.querySelector('.add-book');

const currentDate = document.querySelector('.date');

const dateTime = DateTime.local();
const today = dateTime.toLocaleString(DateTime.DATETIME_FULL);

currentDate.innerHTML = today;

BooksListLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayBookList();
});

formSectionLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayFormSection();
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayContactSection();
});

BooksContainer.addEventListener('click', (e) => {
  removeBookFromPage(e.target);
  removeFromLocalStorage(e.target);
});

window.addEventListener('load', () => {
  createFormSection();
  createContactSection();
  displayBooksOnPage();
});