const { getAllBooks, getBookById} = require('../../models/books.model');

async function httpGetAllBooks(req, res) {
    console.log('getting books...')
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const books = await getAllBooks(skip, limit);
    return res.status(200).json(books);
}

async function httpGetBook(req, res) {
    const id = req.params.id;
    const byOrderId = req.query.order_id === 'true';
    const book = await getBookById(id, byOrderId);
    if (!book) {
        return res.status(404).json({message: 'Book not found'});
    }
    return res.status(200).json(book);
}

module.exports = {
    httpGetAllBooks,
    httpGetBook,
}