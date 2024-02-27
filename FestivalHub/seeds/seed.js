const sequelize = require('../config/connection.js');
const { Festival, Performer, User, Booking } = require('../models');

const festivalData = require('./festivalData.json');
const performerData = require('./performerData.json');
const userData = require('./userData.json');
const bookingData = require('./bookingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Festival.bulkCreate(festivalData, {
    individualHooks: true,
    returning: true,
  });

  await Performer.bulkCreate(performerData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Booking.bulkCreate(bookingData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();