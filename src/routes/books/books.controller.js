const { getAllBooks } = require('../../models/books.model');

async function httpGetAllBooks(req, res) {
    console.log('getting books...')
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) 
    return res.status(200).json(await getAllBooks());
}

module.exports = httpGetAllBooks;