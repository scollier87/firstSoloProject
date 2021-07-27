const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Image } = require('../../db/models');

router.get('', asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    res.json(images);
}));

module.exports = router;