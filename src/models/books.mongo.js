const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: String,
    title: String,
    authors:  String,
    subjects:  String,
    year: String,
    link: {
        html: String,
        txt: String,
        epub: String,
        epub3: String,
        kindle: String,
    },
});

module.exports = mongoose.model('Book', bookSchema);