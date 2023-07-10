const packageJson = require('../../package.json');

/* GET travel view. */
const travel = (req, res) => {
    pageTitle = packageJson.description + ' | Travel';
    res.render('travel', { title: pageTitle });
};

module.exports = {
    travel
};
