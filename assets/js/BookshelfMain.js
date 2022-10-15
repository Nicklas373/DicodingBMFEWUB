const browserStorage = 'BROWSER_STORAGE';
const book_keyword = document.getElementById("keyword-search");
const findAction = document.getElementById('findData');
const submitAction = document.getElementById('bookData');
let findKey;
let findCount = 0;

function browserStorageCheck() {
    return typeof (Storage) !== 'undefined';
}

function bookshelfStorage_dateCompare(newdate) {
  const date = new Date();
  let year = date.getFullYear();
  let currentDate = `${year}`;
  if (Date.parse(newdate) > Date.parse(currentDate)) {
      return false;
  } else {
      return true;
  }
}

function bookshelfStorage_deleteNoQuery(bookshelf, id) {
    const newbookshelf = bookshelf.filter(el => el.id != id);
    localStorage.setItem(browserStorage,JSON.stringify(newbookshelf));
}

function bookshelfStorage_deleteQuery(id) {
    const book_list_search = document.querySelector("#findBook");
    const tempbookshelf = bookshelfStorage_get().filter(el => el.id == id);
    const newbookshelf = bookshelfStorage_get().filter(el => el.id != id);
    const tempBook = {
      id: tempbookshelf[0].id,
      title: tempbookshelf[0].title,
      author: tempbookshelf[0].author,
      year: tempbookshelf[0].year,
      isComplete: tempbookshelf[0].isComplete
    }
    if (confirm("Are you sure want to delete " + tempBook.title + " book ? ") == true) {
      localStorage.setItem(browserStorage,JSON.stringify(newbookshelf));
      book_list_search.innerHTML = '';
      if (book_keyword.value == '') {
        bookshelfStorage_findReset();
      } else {
        bookshelfStorage_find(book_keyword.value);
      }
      bookshelfStorage_show();
      alert(tempBook.title + ' book has successfully deleted !')
    } else {
      alert("Abort delete " + tempBook.title + " book")
    }
}

function bookshelfStorage_find(keyword) {
    const findBookHeadReplace = document.querySelector("#findBookHead");
    const findBookReplace = document.querySelector("#findBook");
    let searchResult = 0;
    findBookHeadReplace.innerHTML = '';
    findBookReplace.innerHTML = '';
    findCount = 0;
    if (browserStorageCheck()) {
      const getBookshelft = bookshelfStorage_get();
      getBookshelft.forEach(book => {
        if (book.title.toLowerCase().includes(keyword.toLowerCase())) {
          if (book.isComplete) {
            let innerReplace = `
            <div class="unfinished-book-temp">  
              <div class="unfinished-book">
                <b>${book.title}</b><br>
                Writer: <b>${book.author}</b><br>
                Release Year: <b>${book.year}</b><br>
                Status: <div class="unfinished-book-v3-card-reverse"><b>Finished Book</b></div><br>
                <button id="removeBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v3-card" type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
              </div>
            </div>`
            findBookReplace.innerHTML += innerReplace;
          } else {
            let innerReplace = `
            <div class="unfinished-book-temp">
              <div class="unfinished-book">
                <b>${book.title}</b><br>
                Writer: <b>${book.author}</b><br>
                Release Year: <b>${book.year}</b><br>
                Status: <div class="unfinished-book-v3-card-reverse"><b>Unfinished Book</b></div><br>
                <button id="removeBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v3-card" type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
              </div>
            </div>`
            findBookReplace.innerHTML += innerReplace;
          }
          findCount += 1;
          findKey = 'Title';
          searchResult += 1;
        } else if (book.author.toLowerCase().includes(keyword.toLowerCase())) {
          if (book.isComplete) {
            let innerReplace = `
            <div class="unfinished-book-temp">
              <div class="unfinished-book">
                <b>${book.title}</b><br>
                Writer: <b>${book.author}</b><br>
                Release Year: <b>${book.year}</b><br>
                Status: <div class="unfinished-book-v3-card-reverse"><b>Finished Book</b></div><br>
                <button id="removeBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v3-card" type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
              </div>
            </div>`
            findBookReplace.innerHTML += innerReplace;
          } else {
            let innerReplace = `
            <div class="unfinished-book-temp">
              <div class="unfinished-book">
                <b>${book.title}</b><br>
                Writer: <b>${book.author}</b><br>
                Release Year: <b>${book.year}</b><br>
                Status: <div class="unfinished-book-v3-card-reverse"><b>Unfinished Book</b></div><br>
                <button id="removeBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v3-card" type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
              </div>
            </div>`
            findBookReplace.innerHTML += innerReplace;
          }
          findCount += 1;
          findKey = 'Writer';
          searchResult += 1;
        } else if (book.year.toLowerCase().includes(keyword.toLowerCase())) {
          if (book.isComplete) {
            let innerReplace = `
            <div class="unfinished-book-temp">
              <div class="unfinished-book">
                <b>${book.title}</b><br>
                Writer: <b>${book.author}</b><br>
                Release Year: <b>${book.year}</b><br>
                Status: <div class="unfinished-book-v3-card-reverse"><b>Finished Book</b></div><br>
                <button id="removeBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v3-card" type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
              </div>
            </div>`
            findBookReplace.innerHTML += innerReplace;
          } else {
            let innerReplace = `
            <div class="unfinished-book-temp">
              <div class="unfinished-book">
                <b>${book.title}</b><br>
                Writer: <b>${book.author}</b><br>
                Release Year: <b>${book.year}</b><br>
                Status: <div class="unfinished-book-v3-card-reverse"><b>Unfinished Book</b></div><br>
                <button id="removeBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v3-card" type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
              </div>
            </div>`
            findBookReplace.innerHTML += innerReplace;
          }
          findCount += 1;
          findKey = 'Year';
          searchResult += 1;
        }
      })
      if (searchResult === 0) {
        if (findCount === 0) {
            findBookHeadReplace.innerHTML = '';
            book_keyword.value = '';
            bookshelfStorage_findReset();
        } else {
          let innerReplace = `<div class="unfinished-book-temp">\
            <h2>Search Result: </h2>
                <div class="found-book">Search result for book with keyword <b>"${keyword}"</b> was not found on our bookshelf !</div>
                <br>
            </div>`
          findBookHeadReplace.innerHTML = innerReplace;
        }
      } else {
        let headReplace = `<div class="unfinished-book-temp">
            <h2>Search Result: Found <b>${searchResult}</b> book with similiar data</h2>
            <div class="found-book">Search result for book with keyword <b>"${keyword}"</b> was found on our bookshelf<br><br>
            Match based on category: <i>"${findKey}"</i></div>
                <br>
            </div>
          `
        findBookHeadReplace.innerHTML = headReplace;
      }
    } else {
      let innerReplace = `<div class="unfinished-book-temp">\
      <h2>Search Result: </h2>
      <div class="found-book">Web Storage feature are not supported on this browser !</div>
          <br>
      </div>`
      findBookReplace.innerHTML += innerReplace;
    }
}

function bookshelfStorage_findReset() {
  const findBookHeadKeyword = document.getElementById("keyword-search");
  const findBookHeadReplace = document.querySelector("#findBookHead");
  const findBookReplace = document.querySelector("#findBook");
  findBookHeadKeyword.value = '';
  findBookHeadReplace.innerHTML = '';
  findBookReplace.innerHTML = '';
}

function bookshelfStorage_get() {
    if (browserStorageCheck()) {
      return JSON.parse(localStorage.getItem(browserStorage)) || [];
    } else {
      return [];
    }
}

function bookshelfStorage_init(data) {
    if (browserStorageCheck()) {
      let bookshelf_list = [];

      if (localStorage.getItem(browserStorage) !== null) {
        bookshelf_list = JSON.parse(localStorage.getItem(browserStorage));
      }

      bookshelf_list.unshift(data);
      localStorage.setItem(browserStorage, JSON.stringify(bookshelf_list));
    }
}

function bookshelfStorage_input_reset() {
  const bookTitle = document.getElementById("input_title");
  const bookWriter = document.getElementById("input_writer");
  const bookYear = document.getElementById("input_year");
  const bookCheck = document.getElementById("input_check");
  bookTitle.value = '';
  bookWriter.value = '';
  bookYear.value = '';
  bookCheck.checked = false;
}

function bookshelfStorage_unread(id) {
  const bookshelf_list_unread = bookshelfStorage_get().filter(book => book.id == id);
  const newBookshelf_unread = {
    id: bookshelf_list_unread[0].id,
    title: bookshelf_list_unread[0].title,
    author: bookshelf_list_unread[0].author,
    year: bookshelf_list_unread[0].year,
    isComplete: false
  }
  bookshelfStorage_deleteNoQuery(bookshelfStorage_get(), id);
  bookshelfStorage_init(newBookshelf_unread);
  if (book_keyword.value == '') {
      bookshelfStorage_findReset();
  } else {
    if (findCount == 0) {
      book_keyword.value = '';
      bookshelfStorage_findReset();
    } else {
      bookshelfStorage_find(book_keyword.value);
    }
  }
  bookshelfStorage_show();
}
  
function bookshelfStorage_read(id) {
    const bookshelf_list_read = bookshelfStorage_get().filter(book => book.id == id);
    const newBookshelf_read = {
      id: bookshelf_list_read[0].id,
      title: bookshelf_list_read[0].title,
      author: bookshelf_list_read[0].author,
      year: bookshelf_list_read[0].year,
      isComplete: true
    }
    bookshelfStorage_deleteNoQuery(bookshelfStorage_get(), id);
    bookshelfStorage_init(newBookshelf_read);
    if (book_keyword.value == '') {
        bookshelfStorage_findReset();
    } else {
      if (findCount == 0) {
        book_keyword.value = '';
        bookshelfStorage_findReset();
      } else {
        bookshelfStorage_find(book_keyword.value);
      }
    }
    bookshelfStorage_show();
}

function bookshelfStorage_show() {
    const bookshelf_list = bookshelfStorage_get();
    const book_list_unread = document.querySelector("#unread_book");
    const book_list_read = document.querySelector("#read_book");
    book_list_unread.innerHTML = '';
    book_list_read.innerHTML = '';
    if (bookshelf_list.length > 0) {
      bookshelf_list.forEach(book => {
        if (!book.isComplete) {
          let innerReplace = `<div class="unfinished-book">\
          <b>${book.title}</b><br>
          Writer: <b>${book.author}</b><br>
          Release Year: <b>${book.year}</b><br>
          <br>
            <div class="unfinished-book-v2">
            <button id="readBook" onclick="bookshelfStorage_read('${book.id}')" class="unfinished-book-v2-card" type="button"><img src="assets/image/check.png" class="downloadImage"/><div class="spanDownload">Finished Book</div></button>
            <button id="removeReadBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v2-card type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
            </div>
          </div>
          `
          book_list_unread.innerHTML += innerReplace;
        } else if (book.isComplete) {
          let innerReplace = `<div class="unfinished-book">
          <b>${book.title}</b><br>
          Writer: <b>${book.author}</b><br>
          Release Year: <b>${book.year}</b><br>
          <br>
            <div class="unfinished-book-v2">
            <button id="unreadBook" onclick="bookshelfStorage_unread('${book.id}')" class="unfinished-book-v2-card" type="button"><img src="assets/image/check.png" class="downloadImage"/><div class="spanDownload">Unfinished Book</div></button>
            <button id="removeReadBook" onclick="bookshelfStorage_deleteQuery('${book.id}')" class="unfinished-book-v2-card" type="button"><img src="assets/image/trash.png" class="downloadImage"/><div class="spanDownload">Remove Book</div></button>
            </div>
          </div>
          `
          book_list_read.innerHTML += innerReplace;
        } else {
          book_list_unread.innerHTML = '';
          book_list_read.innerHTML = '';
        }
      })
    } else {
      book_list_unread.innerHTML = '';
      book_list_read.innerHTML = '';
    }
}

findAction.addEventListener('submit', function(event) { 
    if (browserStorageCheck()) {
        const keywordQuery = document.getElementById('keyword-search').value;
        bookshelfStorage_find(keywordQuery);
        bookshelfStorage_input_reset();
        event.preventDefault();
    } else {
        alert('Web Storage feature are not supported on this browser !, this application can not work correctly !');
    }
})

submitAction.addEventListener('submit', function (event) {
  if (browserStorageCheck()) {
    const book_id = Math.floor((Math.random() * 1000) + 1);
    const book_name = document.getElementById('input_title').value;
    const book_writer = document.getElementById('input_writer').value;
    const book_year  = document.getElementById('input_year').value;
    const book_check = document.getElementById('input_check').checked;
    if (bookshelfStorage_dateCompare(book_year)) {
      const newUnread_Book = {
        id: book_id,
        title: book_name,
        author: book_writer,
        year: book_year,
        isComplete: book_check
      }
      bookshelfStorage_init(newUnread_Book);
    } else {
      alert('Book Year Overflow !');
    }
    bookshelfStorage_input_reset();
    bookshelfStorage_show();
    event.preventDefault();
  } else {
    alert('Web Storage feature are not supported on this browser !, this application can not work correctly !');
  }
});

window.addEventListener('load', function () {
    if (browserStorageCheck()) {
      if (localStorage.getItem(browserStorage) !== null) {
        bookshelfStorage_show();
      }
    } else {
      alert('Web Storage feature are not supported on this browser !, this application can not work correctly !');
    }
});