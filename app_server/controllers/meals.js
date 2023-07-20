const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const foods = JSON.parse(fs.readFileSync('app_server/data/meals.json', 'utf8'));

/* GET meals view. */
const meals = (req, res) => {
    pageTitle = packageJson.description + ' | Meals';
    res.render('meals', { activePage: 'meals', title: pageTitle, foods });
};

module.exports = {
    meals
};
