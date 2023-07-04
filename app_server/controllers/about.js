const packageJson = require('../../package.json');

/* GET about view. */
const about = (req, res) => {
    pageTitle = packageJson.description + ' | About';
    console.log(process.env);
    res.render('about', { title: pageTitle });
};

module.exports = {
    about
};
