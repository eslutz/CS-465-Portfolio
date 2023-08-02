const express = require('express');
const router = express.Router();

const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');
const roomsController = require('../controllers/rooms');
const travelController = require('../controllers/travel');

// API routes
// Route to get a list of all meals
router
    .route('/meals')
    .get(mealsController.mealList);

// Route to find and return a single meal by meal code
router
    .route('/meals/:mealCode')
    .get(mealsController.mealsFindCode);

// Route to get a list of all news
router
    .route('/news')
    .get(newsController.newsList);

// Route to find and return a single news piece by news code
router
    .route('/news/:newsCode')
    .get(newsController.newsFindCode);

// Route to get a list of all rooms
router
    .route('/rooms')
    .get(roomsController.roomList);

// Route to find and return a single room by room code
router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindCode);

// Route to get a list of all trips
router
    .route('/trips')
    .get(travelController.tripList);

// Route to find and return a single trip by trip code
router
    .route('/trips/:tripCode')
    .get(travelController.tripsFindCode);

module.exports = router;
