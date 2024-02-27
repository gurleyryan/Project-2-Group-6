const { Performer } = require('../models');

const performerData = [
  {
    performer_name: 'jacky',
    genre: 'jazz',
    description: 'jazz performance', 
    festival_id: '1'
  },
  {
    performer_name: 'popy',
    genre: 'pop',
    description: 'pop performance', 
    festival_id: '2'
  },
  {
    performer_name: 'jamy',
    genre: 'jazz',
    description: 'jazz performance', 
    festival_id: '8'
  },
  {
    performer_name: 'rocky',
    genre: 'rock',
    description: 'rock performance', 
    festival_id: '3'
  },
  {
    performer_name: 'classi',
    genre: 'classical',
    description: 'classical performance',  
    festival_id: '4'
  },
  {
    performer_name: 'rickpy',
    genre: 'rock',
    description: 'rock performance',
    festival_id: '5'
  },
  {
    performer_name: 'Johnson and brothers',
    genre: 'pop',
    description: 'pop performance',
    festival_id: '6'
  },
  {
    performer_name: 'Kenny Band',
    genre: 'pop',
    description: 'pop performance',
    festival_id: '7'
  },
  {
    performer_name: 'Luke Gory',
    genre: 'country',
    description: 'pop performance',
    festival_id: '9'
  }
];

const seedPerformer = () => Performer.bulkCreate(performerData);

module.exports = seedPerformer;
