const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const info = JSON.parse(fs.readFileSync('app_server/data/about.json', 'utf8'));

/* GET about view. */
const about = (req, res) => {
    pageTitle = packageJson.description + ' | About';
    res.render('about', { activePage: 'about', title: pageTitle, info });
};

module.exports = {
    about
};
