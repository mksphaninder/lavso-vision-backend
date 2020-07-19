const express = require('express');
const router = express.Router();
const visionController = require('../controllers/vision');
// routes
router.get('/', visionController.getLinks);
router.post('/get-links', visionController.getImageLabel);

module.exports = router;