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
            resolve();
        });
    });
}
async function saveBook(book) {
    await books.updateOne({
        
    })
}
loadBooks();