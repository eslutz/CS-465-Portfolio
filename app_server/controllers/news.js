const packageJson = require('../../package.json');

/* GET news view. */
const news = (req, res) => {
    pageTitle = packageJson.description + ' | News';
    console.log(process.env);
    res.render('news', { title: pageTitle });
};

module.exports = {
    news
};
