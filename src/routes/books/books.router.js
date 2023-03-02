const express = require('express');
const { httpGetAllBooks, httpGetBookById } = require('./books.controller');

const bookRouter = express.Router();

bookRouter.get('/', httpGetAllBooks);
bookRouter.get('/:id', httpGetBookById);

module.exports = bookRouter;