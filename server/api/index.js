const api = require('express').Router();

api.use("/driver", require('./driver'));
api.use("/booking", require('./booking'));

module.exports = api