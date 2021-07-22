const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Spot, Review } = require('../../db/models');
//get spots
router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({ include: { model: Review}});
    res.json(spots);
}));
//get a spot
router.get('/:id', asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id);
    return res.json(spot);
}));
// //create a spot
// router.spot('', validateCreate, asyncHandler(async(req, res) => {
//     const spot = await Spot.create(req.body);
//     res.json(spot);
// }))
module.exports = router;