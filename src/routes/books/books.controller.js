const { getAllBooks } = require('../../models/books.model');

async function httpGetAllBooks(req, res) {
    console.log('getting books...')
    return res.status(200).json(await getAllBooks());
}

module.exports = httpGetAllBooks;