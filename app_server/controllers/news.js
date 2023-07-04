const packageJson = require('../../package.json');

/* GET news view. */
const news = (req, res) => {
    pageTitle = packageJson.description + ' | News';
    res.render('news', { title: pageTitle });
};

module.exports = {
    news
};
