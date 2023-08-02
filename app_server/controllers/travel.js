const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render travel list view */
const renderTripList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = packageJson.description + ' | Travel';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips found in database';
        }
    }

    res.render('travel', {
        activePage: 'travel',
        title: pageTitle,
        trips: responseBody,
        message
    });
};

/* GET trip list. */
const tripList = (req, res) => {
    const path = '/api/trips';
    const url = `${apiOptions.server}${path}`;

    console.log(`Inside travelController.tripList calling ${url}`);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(body => {
            let trips = [];
            if (body.length) {
                trips = body;
            }
            renderTripList(req, res, trips);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

module.exports = {
    tripList
};
