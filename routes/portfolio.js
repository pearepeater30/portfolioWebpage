var express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio.js')

router.get('/view', portfolioController.getPortfolio);

module.exports = router;