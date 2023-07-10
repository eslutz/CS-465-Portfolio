const packageJson = require('../../package.json');

/* GET meals view. */
const meals = (req, res) => {
    pageTitle = packageJson.description + ' | Meals';
    res.render('meals', { title: pageTitle });
};

module.exports = {
    meals
};
