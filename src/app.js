const express = require('express');
const app = express();

app.use(morgan('tiny'));


module.exports = app;