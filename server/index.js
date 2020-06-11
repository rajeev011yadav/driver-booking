const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/appointment';
//mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const port = 8080;

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', require('./api'));
app.listen(port, () => console.log(`Express listening on http://localhost:${port}!`));