const express = require('express');
const httpGetAllBooks = require('./books.controller');

const bookRouter = express.Router();

bookRouter.get('/', httpGetAllBooks);
bookRouter.get('/:id', httpGetBook);

module.exports = bookRouter;