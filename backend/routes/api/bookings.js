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

    const newBookings = bookings.map(oneBooking => {
        oneBooking.startDate = oneBooking.formatDate()
        return oneBooking;
    })

    res.json(bookings);
}));

//create a booking
router.post('/', asyncHandler(async(req, res) => {
    const booking = await Booking.create(req.body);
    booking.startDate = booking.formatDate();
    res.json(booking)
}))

//update
router.put('/:id', asyncHandler(async function(req, res){
    const bookingId = parseInt(req.params.id);
    const singleBooking = await Booking.findByPk(bookingId);
    const updatedBooking = await singleBooking.update(req.body);
    const singleUpdatedBooking = await Booking.findByPk(bookingId, {
        include: [{
            model: Spot,
        }]
    });
    singleUpdatedBooking.startDate = singleUpdatedBooking.formatDate();

    return res.json(singleUpdatedBooking)
}))

//delete
router.delete('/:id', asyncHandler(async(req, res) => {
    const bookingId = parseInt(req.params.id)
    const booking = await Booking.destroy({where: {id: bookingId}});
    return res.json(booking)
}))

module.exports = router;