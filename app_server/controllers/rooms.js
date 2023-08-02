const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const room = JSON.parse(fs.readFileSync('app_server/data/rooms.json', 'utf8'));

/* GET rooms view. */
const rooms = (req, res) => {
    pageTitle = packageJson.description + ' | Rooms';
    res.render('rooms', { activePage: 'rooms', title: pageTitle, room });
};

module.exports = {
    rooms
};
