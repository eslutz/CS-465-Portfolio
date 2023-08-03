const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

/* GET rooms view. */
router.get('/', controller.roomList);

module.exports = router;
