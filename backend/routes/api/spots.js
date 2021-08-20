const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Spot, Review, Image } = require('../../db/models');
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
router.post('/', asyncHandler(async(req, res) => {
    const { url } = req.body;
    const spot = await Spot.create(req.body);
    const image = await Image.create({ url, spotId: spot.id });
    const newSpot = await Spot.findByPk(spot.id, { include: Image });
    return res.json(newSpot);
}));
//update
router.put('/:id', asyncHandler(async function(req, res) {
    const spotId = parseInt(req.params.id);
    const singleSpot = await Spot.findByPk(spotId)
    const updatedSpot = await singleSpot.update(req.body)

    return res.json(updatedSpot);
})
)
//delete
router.delete('/:id', asyncHandler(async(req, res) => {
    const spotId = parseInt(req.params.id)
    const spot = await Spot.destroy({where: {id: spotId}});
    return res.json(spot)
}))
module.exports = router;