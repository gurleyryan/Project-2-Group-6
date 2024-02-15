const express = require('express');
const router = express.Router();
const festivalController = require('./controllers/festivalController');

// Define routes
router.get('/festivals', festivalController.getAll);
router.post('/festivals', festivalController.create);

module.exports = router;
