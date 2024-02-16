const { Festival } = require('../Models');

const festivaldata = [
  {
    name: 'jazz',
    location: 'Los Angles',
    starting_date: 'April 20, 2021 07:00:00',
    ending_date: 'June 21, 2021 17:00:00',
    description: 'jazz festival'
  },
  {
    name: 'pop',
    location: 'Hayward',
    starting_date: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
    description: 'pop festival'
  },
  {
    name: 'rock',
    location: 'San Francisco',
    starting_date: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
    description: 'rock festival'
  },
  {
    name: 'classical',
    location: 'Fremont',
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2021 19:00:00',
    description: 'classical festival'
  },
];

const seedFestival = () => Festival.bulkCreate(festivaldata);

module.exports = seedFestival;