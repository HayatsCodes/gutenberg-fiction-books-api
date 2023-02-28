const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: String,
    title: String,
    authors:  String,
    subjects:  String,
    year: String,
    link: Object,
});

module.exports = mongoose.model('Book', bookSchema);