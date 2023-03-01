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
  
  

function loadBooks() {
    const countBooks = 0;
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'book_catalog.csv'))
        .pipe(csv.parse({
            columns: true
        }))
        .on('data', (data) => {
            if (isFiction(data) && isEnglish(data)) {
                saveBook(data);
                countBooks++;
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            console.log(`Found ${} fiction books`);
            resolve();
        });
    });
}
async function saveBook(book) {
    const BOOK_URL = `http://www.gutenberg.org/ebooks/${book['Text#']}`
    try {
        await books.updateOne({
            id: book['Text#']
        }, {
            id: book['Text#'],
            title: book.Title,
            authors: book.Authors,
            subjects: book.Subjects,
            year: book.Issued,
            link: {
                html:`${BOOK_URL}.html.noimages`,
                html5: `${BOOK_URL}.html.images`,
                txt: `${BOOK_URL}.txt.utf-8`,
                epub: `${BOOK_URL}.epub.noimages`,
                epub3: `${BOOK_URL}.epub3.images`,
                kindle: `${BOOK_URL}.kf8.images`
            }
        }, {
            upsert: true,
        });
    } catch(err) {
        console.error(`Could not save book ${err}`);
    }
   
}

async function getAllBooks() {
    await books.find({}, {
        '_id': 0,
        '__v': 0
    })
}

module.exports = {
    loadBooks,
}