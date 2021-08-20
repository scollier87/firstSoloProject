const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Image } = require('../../db/models');

router.get('', asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    res.json(images);
}));

//create a image
router.post('/', asyncHandler(async (req, res) => {
    const image = await Image.create(req.body);
    res.json(image);
}));

//update
router.put('/:id', asyncHandler(async function(req, res){
    const imageId = parseInt(req.params.id);
    const singleImage = await Image.findByPk(imageId)
    const updatedImage = await singleImage.update(req.body)

    return res.json(updatedImage);
}))

module.exports = router;