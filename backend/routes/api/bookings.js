const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Booking } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll();
    res.json(bookings);
}));

module.exports = router;