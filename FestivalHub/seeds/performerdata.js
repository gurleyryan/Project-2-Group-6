const { Performer } = require('../Models');

const performerData = [
  {
    performer_name: 'jacky',
    genre: 'jazz',
    description: 'jazz performance',
    image_file: 'img1.jpg',
    festival_id: '1'
  },
  {
    performer_name: 'popy',
    genre: 'pop',
    description: 'pop performance',
    image_file: 'img2.jpg',
    festival_id: '2'
  },
  {
    performer_name: 'jamy',
    genre: 'jazz',
    description: 'jazz performance',
    image_file: 'img1.jpg',
    festival_id: '1'
  },
  {
    performer_name: 'rocky',
    genre: 'rock',
    description: 'rock performance',
    image_file: 'img3.jpg',
    festival_id: '3'
  },
  {
    performer_name: 'classi',
    genre: 'classical',
    description: 'classical performance',
    image_file: 'img4.jpg',
    festival_id: '4'
  },
  {
    performer_name: 'rickpy',
    genre: 'rock',
    description: 'rock performance',
    image_file: 'img3.jpg',
    festival_id: '3'
  }
];

const seedPerformer = () => Performer.bulkCreate(performerData);

module.exports = seedPerformer;