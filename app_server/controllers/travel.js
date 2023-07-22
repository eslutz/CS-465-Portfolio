const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const request = require('request');
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
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.log('>> travelController.tripList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            let trips = [];
            if (statusCode === 200 && body.length) {
                trips = body.map((trip) => {
                    trip.date = trip.date ? trip.date : 'N/A';
                    return trip;
                });
            }
            renderTripList(req, res, trips);
        }
    );
};

module.exports = {
    tripList
};
