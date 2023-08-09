const express = require('express');
const router = express.Router();
const controller = require('../controllers/about');

/* GET about view. */
router.get('/', controller.about);

module.exports = router;
