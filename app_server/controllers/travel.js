const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const trips = JSON.parse(fs.readFileSync('app_server/data/trips.json', 'utf8'));

/* GET travel view. */
const travel = (req, res) => {
    pageTitle = packageJson.description + ' | Travel';
    res.render('travel', { activePage: 'travel', title: pageTitle, trips });
};

module.exports = {
    travel
};
