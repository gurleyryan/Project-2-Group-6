const sequelize = require('../config/connection.js');
const seedFestival = require('./festivalData');
const seedPerformer = require('./performerData');
const seedUser = require('./userData');
const seedBooking = require('./bookingData');
const seedMusic = require('./imageData');
const seedReview = require('./reviewData');
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFestival();

  await seedPerformer();

  await seedUser();

  await seedBooking();

  await seedMusic();

  await seedReview();

  process.exit(0);
};

seedAll();
