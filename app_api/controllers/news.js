const mongoose = require('mongoose');
const model = mongoose.model('news');

// GET: /news - return list of all news
const newsList = async (req, res) => {
    try {
        const news = await model.find({});
        if (!news) {
            return res
                .status(404)
                .json({ "message": "news not found" });
        } else {
            return res
                .status(200)
                .json(news);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

// GET: /news/:newsCode - return a single news piece
const newsFindCode = async (req, res) => {
    try {
        const news = await model.find({ 'code': req.params.newsCode });
        if (!news) {
            return res
                .status(404)
                .json({ "message": "news not found" });
        } else {
            return res
                .status(200)
                .json(news);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

module.exports = {
    newsList,
    newsFindCode
};
