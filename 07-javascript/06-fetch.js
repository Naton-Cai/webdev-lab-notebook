const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');
app.style.paddingLeft = 0;

const addBookToDOM = (book) => {
  let bookElement = document.createElement('div');
  let title = document.createElement('h4');
  let author = document.createElement('p');
  let released = document.createElement('p');
  let pages = document.createElement('p');

  bookElement.style.display = 'flex';
  bookElement.style.flexDirection = 'column';
  bookElement.style.alignItems = 'center';
  bookElement.style.marginTop = '20px';


  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  bookElement.appendChild(title);
  bookElement.appendChild(author);
  bookElement.appendChild(released);
  bookElement.appendChild(pages);

  app.append(bookElement);
};
  
  

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        addBookToDOM(book);
      });
    })
    .catch((error) => {
      let div = document.createElement('div');
      div.textContent = `An error occurred.`;
      app.append(div);
    })
    .finally(() => {
      let loading = document.querySelector('#loading');
      app.removeChild(loading);
    });
};

fetchData(url);
