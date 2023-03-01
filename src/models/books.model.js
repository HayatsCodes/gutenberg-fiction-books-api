const fs = require('fs');
const path = require('path');
const csv = require('csv-parse');
const books = require('./books.mongo');

function isFiction(book) {
    const regex = /^(?!.*(religion|christianity|islam|quran|bible|judaism|buddhism|hinduism)).*fiction.*$/i;
    return regex.test(book.Subjects);
  }

  function isEnglish(book) {
    if (book.Language === 'en') {
        return true;
    } else {
        return false;
    }
}
  

  const fictionBooks = [];
  

function loadBooks() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'book_catalog.csv'))
        .pipe(csv.parse({
            columns: true
        }))
        .on('data', (data) => {
            if (isFiction(data) && isEnglish(data)) {
                fictionBooks.push(data);
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            console.log(`Found ${fictionBooks.length} fiction books`);
            console.log(fictionBooks);
            resolve();
        });
    });
}
async function saveBook(book) {
    const BOOK_URL = 'http://www.gutenberg.org/ebooks'
    await books.updateOne({
        id: book['Text#']
    }, {
        id: book['Text#'],
        title: book.Title,
        authors: book.Authors,
        subjects: book.Subjects,
        year: book.Issued,
        link: {
            html: `${BOOK_URL}/${book['Text#']}.html.images`,
            txt:
        },
    })
}
loadBooks();