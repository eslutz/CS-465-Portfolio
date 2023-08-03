const mongoose = require("mongoose");
const tripModel = mongoose.model("trips");

// GET: /trips - return list of all trips
const tripList = async (req, res) => {
    tripModel
        .find({})
        .exec((err, trips) => {
            console.log('in trips app_api controller');
            if (!trips) {
                return res
                    .status(404)
                    .json({ message: "trips not found" });
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
    tripModel
        .find({ code: req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ message: "trip not found" });
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

module.exports = {
  tripList,
  tripsFindCode,
};
