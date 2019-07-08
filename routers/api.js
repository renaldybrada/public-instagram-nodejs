const express = require('express');
const router = express.Router();
const instagramController = require('../controllers/instagramController');

router.get('/instagram/tags/:tags', instagramController.scrapByTags)
router.get('/instagram/username/:username', instagramController.scrapByUsername)
router.get('/instagram/media/:shortcode', instagramController.contentDetail)
router.get('/instagram/search', instagramController.searchByQuery)

module.exports = router;
