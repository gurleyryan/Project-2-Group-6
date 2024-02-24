const router = require('express').Router();
const performerRoutes = require('./performerRoutes.js');
const festivalRoutes = require('./festivalRoutes.js');
const userRoutes = require('./userRoutes.js');
const bookingRoutes = require('./bookingRoutes.js');
const reviewRoutes = require('./reviewRoutes.js');

router.use('/festival', festivalRoutes);
router.use('/performer', performerRoutes);
router.use('/users', userRoutes);
router.use('/booking', bookingRoutes);
router.use('/review', reviewRoutes);


module.exports = router;