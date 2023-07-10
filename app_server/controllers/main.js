const packageJson = require('../../package.json');

/* GET home page. */
const index = (req, res) => {
    pageTitle = packageJson.description + ' | Home';
    res.render('index', { title: pageTitle });
};

module.exports = {
    index
};
