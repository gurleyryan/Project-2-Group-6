const { Review } = require('../models');

const reviewData = [
  {
    festival_id: '2',
    user_id: '3',
    review: "Hay qua",
  },
  {
    festival_id: '4',
    user_id: '4',
    review: "Tra tien lai di",
  },
  {
    festival_id: '1',
    user_id: '3',
    review: "Do qua",
  },
  {
    festival_id: '4',
    user_id: '3',
    review: "Tuyet qua",
  },
  {
    festival_id: '1',
    user_id: '2',
    review: "Chan qua",
  },
  {
    festival_id: '3',
    user_id: '5',
    review: "Hay qua",
  },

  {
    festival_id: '2',
    user_id: '4',
    review: "Ghe qua",
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;



