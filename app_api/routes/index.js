const express = require('express');
const router = express.Router();
const {expressjwt: jwt} = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"],
});

const authController = require('../controllers/authentication');
const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');
const roomsController = require('../controllers/rooms');
const travelController = require('../controllers/travel');

// API routes
// Route to authenticate a user
router
    .route('/login')
    .post(authController.login);

// Route to register a new user
router
    .route('/register')
    .post(authController.register);

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
    .get(travelController.tripList)
    .post(auth, travelController.tripsAddTrip);

// Route to find and return a single trip by trip code
router
    .route('/trips/:tripCode')
    .get(travelController.tripsFindCode)
    .put(auth, travelController.tripsUpdateTrip)
    .delete(auth, travelController.tripsDeleteTrip);

module.exports = router;
