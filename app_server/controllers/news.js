const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render news list view */
const renderNewsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = packageJson.description + ' | News';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No news found in database';
        }
    }

    const latestNews = responseBody.filter(news => news.code.includes('LATEST'));
    const vacationTips = responseBody.filter(news => news.code.includes('TIPS'));
    const featured = responseBody.filter(news => news.code.includes('FEATURED'))[0];

    res.render('news', {
        activePage: 'news',
        title: pageTitle,
        latestNews,
        vacationTips,
        featured,
        message
    });
};

/* GET news list. */
const newsList = (req, res) => {
    const path = '/api/news';
    const url = `${apiOptions.server}${path}`;

    console.log(`Inside newsController.newsList calling ${url}`);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(body => {
            let news = [];
            if (body.length) {
                news = body;
            }
            renderNewsList(req, res, news);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

module.exports = {
    newsList
};
