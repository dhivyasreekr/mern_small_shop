const express = require('express');
const router = express.Router();
const categoryController = require('../../../controllers/v2/CategoryController');

//route to get all categories
router.get('/', categoryController.getAllCategories);

module.exports = router;