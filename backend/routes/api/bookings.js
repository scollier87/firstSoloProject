const express = require('express');
const asyncHandler = require('express-async-handler');
// const { default: spotsReducer } = require('../../../frontend/src/store/spots');
const router = express.Router();

const { Booking, Spot } = require('../../db/models');
//get bookings
router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll({
        include: {
            model: Spot
        }
    });
    res.json(bookings);
}));

//create a booking
router.post('/', asyncHandler(async(req, res) => {
    const booking = await Booking.create(req.body);
    res.json(booking)
}))

module.exports = router;