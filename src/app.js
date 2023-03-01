const express = require('express');
const app = express();

app.use(morgan('tiny'));
app.use('books')


module.exports = app;