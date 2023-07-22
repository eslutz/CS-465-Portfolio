const mongoose = require('mongoose');
const model = mongoose.model('meals');

// GET: /meals - return list of all meals
const mealList = async (req, res) => {
    model
        .find({}) // Empty filter to return all meals
        .exec((err, meals) => {
            if (!meals) {
                return res
                    .status(404)
                    .json({ "message": "meals not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(meals);
            }
        });
};

// GET: /meals/:mealCode - return a single meal
const mealFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.mealCode })
        .exec((err, meal) => {
            if (!meal) {
                return res
                    .status(404)
                    .json({ "message": "meal not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(meal);
            }
        });
};

module.exports = {
    mealList,
    mealFindByCode
};
