const Product = require('../../models/Product');
const dotenv = require('dotenv');

exports.getAllProducts = async (req, res) => {
    try{

        const PORT = process.env.PORT || 9000;
        const HOST = process.env.HOST || '0.0.0.0';

        const products = await Product.find();

        const transformedProducts = products.map(row => ({
            _id: row._id,
            name: row.name,
            price: row.price,
            image_path: `http://${HOST}:${PORT}/${row.image_path}`,
        }));

        res.status(200).json({ data: transformedProducts});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};