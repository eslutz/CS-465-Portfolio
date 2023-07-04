const packageJson = require('../../package.json');

/* GET rooms view. */
const rooms = (req, res) => {
    pageTitle = packageJson.description + ' | Rooms';
    console.log(process.env);
    res.render('rooms', { title: pageTitle });
};

module.exports = {
    rooms
};
