const express = require('express');
const router = express.Router();

const roomsController = require('../controllers/rooms');
const travelController = require('../controllers/travel');

// API routes
// Route to get a list of all rooms
router
    .route('/rooms')
    .get(roomsController.roomList);

// Route to find and return a single room by room name
router
    .route('/rooms/:roomCode')
    .get(roomsController.roomFindByCode);

// Route to get a list of all trips
router
    .route('/trips')
    .get(travelController.tripList);

// Route to find and return a single trip by trip code
router
    .route('/trips/:tripCode')
    .get(travelController.tripFindByCode);

module.exports = router;
