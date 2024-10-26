const express = require('express');
const router = express.Router();
const brandController = require('../../../controllers/v2/BrandController');

router.get('/', brandController.getAllBrands);

module.exports = router;