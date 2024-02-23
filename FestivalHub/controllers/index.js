const router = require('express').Router();

// const festivalController = require('./controllers/festivalController');

// Define routes
// router.get('/festivals', festivalController.getAll);
// router.post('/festivals', festivalController.create);

const apiRoutes = require('./api');
// const festivalController = require('./festivalController');

// router.use('/', festivalController);
router.use('/api', apiRoutes);

module.exports = router;