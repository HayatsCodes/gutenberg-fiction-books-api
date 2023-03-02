const { getAllBooks, getBookById, getBookByOrderId } = require('../../models/books.model');

async function httpGetAllBooks(req, res) {

    const validParams = ['page', 'limit', 'order_id'];

    const queryParams = object.keys(req.query);

    const isValidParams = queryParams.every((param) => validParams.includes(param));

    if (!isValidParams) {
        return res.status(400).json('Invalid query parameters');
    }

    const { order_id } = req.query


    console.log('getting books...')
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const books = await getAllBooks(skip, limit);
    return res.status(200).json(books);
}

async function httpGetBookById(req, res) {
    return res.status(200).json(await getBookById());
}

module.exports = {
    httpGetAllBooks,
    httpGetBookById,
}