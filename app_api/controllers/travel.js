const mongoose = require('mongoose');
const tripModel = mongoose.model('trips');
const userModel = mongoose.model('users');

// GET: /trips - return list of all trips
const tripList = async (req, res) => {
    console.log('TravelController#tripList', req.body);
    tripModel
        .find({})
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ message: 'trips not found' });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

// GET: /trips/:tripCode - return a single trip
const tripsFindCode = async (req, res) => {
    console.log('TravelController#tripsFindCode', req.body);
    tripModel
        .find({ code: req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ message: 'trip not found with code ' + req.params.tripCode });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

// POST: /trips - add a new trip
const tripsAddTrip = async (req, res) => {
    console.log('TravelController#tripsAddTrip', req.body);
    getUser(req, res, (req, res) => {
        tripModel
            .create(
                {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description,
                },
                (err, trip) => {
                    if (err) {
                        return res
                            .status(400) //bad request
                            .json(err);
                    } else {
                        return res
                            .status(201) //creates
                            .json(trip);
                    }
                }
            );
    });
};

// PUT: /trips/:tripCode - update a single trip
const tripsUpdateTrip = async (req, res) => {
    console.log('TravelController#tripsUpdateTrip', req.body);
    getUser(req, res, (req, res) => {
        tripModel
            .findOneAndUpdate({
                code: req.params.tripCode
            },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description,
            },
            {
                new: true
            })
            .then((trip) => {
                if (!trip) {
                    return res
                        .status(404)
                        .send({ message: 'Trip not found with code ' + req.params.tripCode });
                }
                res
                    .status(200)
                    .send(trip);
            })
            .catch((err) => {
                if (err.kind === 'ObjectId') {
                    return res
                        .status(404)
                        .send({ message: 'Trip not found with code ' + req.params.tripCode});
                }
                return res
                    .status(500) // server error
                    .json(err);
            });
    });
};

// DELETE: /trips/:tripCode - delete a single trip
const tripsDeleteTrip = async (req, res) => {
    console.log('TravelController#tripsDeleteTrip', req.body);
    getUser(req, res, (req, res) => {
        tripModel
            .findOneAndRemove({
                code: req.params.tripCode
            })
            .then((trip) => {
                if (!trip) {
                    return res
                        .status(404)
                        .send({ message: 'trip not found with code ' + req.params.tripCode });
                }
                res
                    .status(200)
                    .send({ message: `trip ${req.params.tripCode} successfully deleted!` });
            })
            .catch((err) => {
                if (err.kind === 'ObjectId') {
                    return res

                        .status(404)
                        .send({ message: 'trip not found with code ' + req.params.tripCode });
                }
                return res
                    .status(500) // server error
                    .json(err);
            });
    });
};

// Return the user name if authenticated
const getUser = (req, res, callback) => {
    if (req.auth && req.auth.email) {
        userModel
            .findOne({
                email: req.auth.email
            })
            .exec((err, user) => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ message: 'User not found' });
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req, res, user.name);
            });
    } else {
        return res
            .status(404)
            .json({ message: 'User not found' });
    }
};

module.exports = {
    tripList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};
