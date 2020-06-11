const booking = require('express').Router();

const {handleCostCalculation} = require('./handler');

booking.post("/calculate-cost", handleCostCalculation);

module.exports = booking;