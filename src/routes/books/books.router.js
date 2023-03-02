const express = require('express');
const { httpGetAllBooks, httpGetBook } = require('./books.controller');

const bookRouter = express.Router();

bookRouter.get('/', httpGetAllBooks);
bookRouter.get('/:id', httpGetBook);
bookRouter.get('/?order_id', httpGetBook);

module.exports = bookRouter;