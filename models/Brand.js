const mongoose = require("mongoose");

// Brand Schema
const brandSchema  = new mongoose.Schema({
    name: {type: String, required: true},
    image_path: { type: String, default: 'no_image_available.jpg'}
}, { timestamp: true });

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;