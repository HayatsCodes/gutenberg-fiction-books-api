const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    gutenberg_id: String,
    order_id
    index: Number,
    title: String,
    authors:  String,
    subjects:  String,
    year: String,
    link: {
        html: String,
        html5: String,
        txt: String,
        epub: String,
        epub3: String,
        kindle: String,
    },
});

module.exports = mongoose.model('Book', bookSchema);