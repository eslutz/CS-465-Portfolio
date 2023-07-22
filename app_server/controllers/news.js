const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render room list view */
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

/* GET room list. */
const newsList = (req, res) => {
    const path = '/api/news';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.log('>> newsController.newsList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            let news = [];
            if (statusCode === 200 && body.length) {
                news = body
            }
            renderNewsList(req, res, news);
        }
    );
};

module.exports = {
    newsList
};
