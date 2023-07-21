const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// API routes
// Route to get a list of all trips
router
    .route('/trips')
    .get(tripsController.tripList);

// Route to find and return a single trip by trip code
router
    .route('/trips/:tripCode')
    .get(tripsController.tripList);

module.exports = router;
