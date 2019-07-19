const express = require('express');
const router = express.Router();
const instagramController = require('../controllers/instagramController');

router.get('/tags/:tags', instagramController.scrapByTags)
router.get('/username/:username', instagramController.scrapByUsername)
router.get('/media/:shortcode', instagramController.contentDetail)
router.get('/search', instagramController.searchByQuery)

module.exports = router;
