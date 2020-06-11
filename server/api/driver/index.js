var express = require('express');
var router = express.Router();

var Driver = require('../../models/driver');
Driver.methods(['get', 'put', 'post', 'delete']);
Driver.register(router, '/');

module.exports = router;
