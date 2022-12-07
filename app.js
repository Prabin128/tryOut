const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const categoryRoute = require('./routes/category');

app.use(bodyParser.json());
app.use("/category", categoryRoute);


module.exports = app;