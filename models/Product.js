const mongoose = require("mongoose");

// Product Schema
const productSchema  = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    image_path: { type: String, default: 'no_image_available.jpg'}
}, { timestamp: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;