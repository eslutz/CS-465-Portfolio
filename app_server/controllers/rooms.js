const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render room list view */
const renderRoomList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = packageJson.description + ' | Rooms';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No rooms found in database';
        }
    }

    res.render('rooms', {
        activePage: 'rooms',
        title: pageTitle,
        rooms: responseBody,
        message
    });
};

/* GET room list. */
const roomList = (req, res) => {
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.log('>> roomsController.roomList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            let rooms = [];
            if (statusCode === 200 && body.length) {
                rooms = body
            }
            renderRoomList(req, res, rooms);
        }
    );
};

module.exports = {
    roomList
};
