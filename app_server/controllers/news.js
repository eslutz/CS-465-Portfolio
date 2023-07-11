const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const theNews = JSON.parse(fs.readFileSync('app_server/data/news.json', 'utf8'));

/* GET news view. */
const news = (req, res) => {
    pageTitle = packageJson.description + ' | News';
    res.render('news', { title: pageTitle, theNews });
};

module.exports = {
    news
};
