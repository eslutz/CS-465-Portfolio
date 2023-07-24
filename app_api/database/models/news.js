const mongoose = require('mongoose');

// Define news schema
const newsSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    author: { type: String, required: false },
    publishDate: { type: String, required: false },
    image: { type: String, required: false },
    alt: { type: String, required: false },
    content: { type: String, required: false }
});

module.exports = mongoose.model('news', newsSchema);