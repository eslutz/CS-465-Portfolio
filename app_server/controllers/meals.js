const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render meal list view */
const renderMealList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = packageJson.description + ' | Meals';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No meals found in database';
        }
    }

    res.render('meals', {
        activePage: 'meals',
        title: pageTitle,
        meals: responseBody,
        message
    });
};

/* GET meal list. */
const mealList = (req, res) => {
    const path = '/api/meals';
    const url = `${apiOptions.server}${path}`;

    console.log(`Inside mealsController.mealList calling ${url}`);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(body => {
            let meals = [];
            if (body.length) {
                meals = body;
            }
            renderMealList(req, res, meals);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

module.exports = {
    mealList
};
