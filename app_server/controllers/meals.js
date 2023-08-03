const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const request = require('request');
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
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.log('>> mealsController.mealList calling ' + requestOptions.url);
    request(requestOptions, (err, { statusCode }, body) => {
        if (err) {
            console.error(err);
        }
        renderMealList(req, res, body);
    });
};

module.exports = {
    mealList
};
