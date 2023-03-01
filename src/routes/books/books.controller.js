const { getAllBooks } = require('../../models/books.model');

async function httpGetAllBooks(req, res) {
    return res.status(200).json(await getAllBooks())
}