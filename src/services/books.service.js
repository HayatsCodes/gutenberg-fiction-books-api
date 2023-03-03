const books = require('../models/books.mongo');


async function getAllBooks(skip, limit) {
    console.log('Books found!')
    return await books
    .find({}, {'_id': 0, '__v': 0})
    .sort({ order_id: 1})
    .skip(skip)
    .limit(limit);
}

async function getBookById(id) {
    console.log('id: ', id);
    return await books.findOne({gutenberg_id: id}, {'_id': 0, '__v': 0});
}

async function getBookByOrderId(id) {
    return await books.findOne({order_id: id}, {'_id': 0, '__v': 0});
}


module.exports = {
    getAllBooks,
    getBookById,
    getBookByOrderId,
}