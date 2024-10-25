const Category = require('../../models/Category');

// Get all Categories
exports.getAllCategories = async (req, res) => {
    try{
        const cateogries = await Category.find();
        res.status(200).json({ data: categories});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};