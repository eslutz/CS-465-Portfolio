const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');

/* GET travel view. */
router.get('/', controller.travelList);

module.exports = router;
