const mongoose = require('mongoose');

const scriptSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Script', scriptSchema);
