const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Spot, Review } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({ include: { model: Review}});
    res.json(spots);
}));

module.exports = router;