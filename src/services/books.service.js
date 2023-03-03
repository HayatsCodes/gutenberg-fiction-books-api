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
    return await books.find({gutenberg_id: id}, {'_id': 0, '__v': 0});
}

async function getBookByOrderId(id) {
    return await books.find({order_id: id}, {'_id': 0, '__v': 0});
}
