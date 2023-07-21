const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const theNews = JSON.parse(fs.readFileSync('app_server/data/news.json', 'utf8'));

// const latestNews = theNews.filter(news => news.type === 'latestNews');
// const vacationTips = theNews.filter(news => news.type === 'vacationTips');
// const featuredNews = theNews.filter(news => news.type === 'featuredNews')[0];

/* GET news view. */
const news = (req, res) => {
    pageTitle = packageJson.description + ' | News';
    res.render('news', { activePage: 'news', title: pageTitle, latestNews, vacationTips, featuredNews });
};

module.exports = {
    news
};
