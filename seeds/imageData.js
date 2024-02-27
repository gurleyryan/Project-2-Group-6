const { Image } = require('../models');

const imageData = [
  {
    image_file: '1.jpg',
    description: 'jazz music in winter',
    performer_id: 1,
  },
  {
    image_file: '2.jpg',
    description: 'music is the best',
    performer_id: 2,
  },
  {
    image_file: '3.jpg',
    description: 'no music no life',
    performer_id: 3,
  },
  {
    image_file: '4.jpg',
    description: 'wonderful life goes with music',
    performer_id: 1,
  },
  {
    image_file: '5.jpg',
    description: 'good life is a goof melody',
    performer_id: 7,
  },
  {
    image_file: '6.jpg',
    description: 'music kills boring',
    performer_id: 4,
  },

  {
    image_file: '7.jpg',
    description: 'bubble music raining too much',
    performer_id: 8,
  },
  {
    image_file: '9.jpg',
    description: '7 chords create a plenty of music',
    performer_id: 3,
  },
  {
    image_file: '8.jpg',
    description: 'lets music',
    performer_id: 9,
  }, {
    image_file: '8.jpg',
    description: 'music is a happy liquid',
    performer_id: 6,
  },
];

const seedMusic = () => Image.bulkCreate(imageData);

module.exports = seedMusic;



