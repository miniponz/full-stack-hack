const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use('/runs', require('./routes/runs'));

module.exports = app;
