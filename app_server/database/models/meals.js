const mongoose = require('mongoose');

// Define trip schema
const mealSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    alt: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('meals', mealSchema);
