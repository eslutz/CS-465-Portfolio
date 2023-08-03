const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const request = require('request');
const apiOptions = {
    server: 'http://127.0.0.1:3000'
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
        json: {},
    };

    console.info(' >> travelcontroller.travelList calling ' + requestOptions.url);
    request(requestOptions, (err, { statusCode }, body) => {
        if (err) {
            console.error(err);
        }
        // console.log("err", err);
        // console.log("statusCode", statusCode);
        // console.log("body", body);
        // console.log("requestOptions", requestOptions);
        // console.log("req", req);
        // console.log("res", res);
        // console.log("body", body);

        renderTripList(req, res, body);
    });
};

module.exports = {
    tripList
};
