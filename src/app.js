const express = require('express');
const morgan = require('morgan');
const app = express();

const bookRouter = require('./routes/books/books.router');

app.use(morgan('tiny'));
app.use('books', bookRouter);


module.exports = app;