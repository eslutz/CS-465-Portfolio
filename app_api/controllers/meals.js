const mongoose = require('mongoose');
const model = mongoose.model('meals');

// GET: /meals - return list of all meals
const mealList = async (req, res) => {
    try {
        const meals = await model.find({});
        if (!meals) {
            return res
                .status(404)
                .json({ "message": "meals not found" });
        } else {
            return res
                .status(200)
                .json(meals);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

// GET: /meals/:mealCode - return a single meal
const mealsFindCode = async (req, res) => {
    try {
        const meals = await model.find({ 'code': req.params.mealCode });
        if (!meals) {
            return res
                .status(404)
                .json({ "message": "meal not found" });
        } else {
            return res
                .status(200)
                .json(meals);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

module.exports = {
    mealList,
    mealsFindCode
};
