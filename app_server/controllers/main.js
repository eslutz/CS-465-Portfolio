const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const mainPage = JSON.parse(fs.readFileSync('app_server/data/index.json', 'utf8'));

/* GET home page. */
const index = (req, res) => {
    pageTitle = packageJson.description + ' | Home';
    res.render('index', { activePage: 'main', title: pageTitle, mainPage });
};

module.exports = {
    index
};
