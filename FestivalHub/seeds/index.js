const sequelize = require('../config/connection.js');
const seedFestival = require('/festivalData');
const seedPerformer = require('/performerData');
const seedUser = require('./userData');
const seedBooking = require('/bookingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFestival();

  await seedPerformer();

  await seedUser();

  await seedBooking();

  process.exit(0);
};

seedAll();