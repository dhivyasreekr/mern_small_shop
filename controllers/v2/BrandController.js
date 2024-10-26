const Brand = require('../../models/Brand');
const dotenv = require('dotenv');

exports.getAllBrands = async (req, res) => {
    try{

        const PORT = process.env.PORT || 9000;
        const HOST = process.env.HOST || '0.0.0.0';

        const brands = await Brand.find();

        const transformedBrands = brands.map(row => ({
            _id: row._id,
            name: row.name,
            image_path: `http://${HOST}:${PORT}/${row.image_path}`,
        }));

        res.status(200).json({ data: transformedBrands});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};