const mongoose = require('mongoose');
const model = mongoose.model('news');

// GET: /news - return list of all news
const newsList = async (req, res) => {
    model
        .find({}) // Empty filter to return all news
        .exec((err, news) => {
            if (!news) {
                return res
                    .status(404)
                    .json({ "message": "news not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(news);
            }
        });
};

// GET: /news/:newsCode - return a single news piece
const newsFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.newsCode })
        .exec((err, news) => {
            if (!news) {
                return res
                    .status(404)
                    .json({ "message": "news not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(news);
            }
        });
};

module.exports = {
    newsList,
    newsFindByCode
};