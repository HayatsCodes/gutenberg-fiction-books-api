const { getAllBooks, getBookById, getBookByOrderId } = require('../../ser/books.model');

async function httpGetAllBooks(req, res) {

    const validParams = ['page', 'limit', 'order_id'];

    const queryParams = Object.keys(req.query);

    const isValidParams = queryParams.every((param) => validParams.includes(param));

    if (!isValidParams) {
        return res.status(400).json('Invalid query parameters');
    }

    const { order_id } = req.query;


    if (order_id) {
        console.log('Getting book by order id');
        const book = await getBookByOrderId(order_id);
        if (book) {
            return res.status(200).json(book);
        } else {
            return res.status(404).json('Book not found');
        }
    }

    console.log('getting books...')

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const books = await getAllBooks(skip, limit);
    return res.status(200).json(books);
}

async function httpGetBookById(req, res) {
    console.log('Getting book by gutenberg id');

    const id = req.params.id.split(':')[1];
    
    const book = await getBookById(id);
    if (book.length > 0) {
        return res.status(200).json(book);
    }
    return res.status(404).json('Gutenberg book id not found');
}

module.exports = {
    httpGetAllBooks,
    httpGetBookById,
}