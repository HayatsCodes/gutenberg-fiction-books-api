const express = require('express');
const app = express();

const bookRouter = require('./routes/books/books.router');

app.use(morgan('tiny'));
app.use('books', bookRouter);


module.exports = app;