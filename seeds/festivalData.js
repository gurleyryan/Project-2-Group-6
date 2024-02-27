const { Festival } = require('../models');

const festivaldata = [
  {
    name: 'Jazz with Legend',
    location: 'Los Angeles',
   //  starting_date: 'April 20, 2021 07:00:00',
   // ending_date: 'June 21, 2021 17:00:00',
    description: 'Enjoy jazz music at the beach',
    ticket_price: 500,
    background_img:'fest_jazz1.jpg'
  },
  {
    name: '90s Pop',
    location: 'Hayward',
   // starting_date: 'June 22, 2021 09:00:00',
   // ending_date: 'September 22, 2021 22:00:00',
    description: 'with a plenty of 90s songs, the show will give you a relaxing time',
    ticket_price: 350.50,
    background_img:'fest_pop1.jpg'
  },
  {
    name: 'Are you ready for rock??????',
    location: 'San Francisco',
   // starting_date: 'September 23, 2021 08:30:00',
   // ending_date: 'December 21, 2021 20:30:00',
    description: 'rock festival',
    ticket_price: 250.65,
    background_img:'fest_rock2.jpg'
  },
  {
    name: 'classical with friends',
    location: 'Tracy',
  //  starting_date: 'December 22, 2020 11:00:00',
  //  ending_date: 'March 19, 2021 19:00:00',
    description: 'classical festival',
    ticket_price: 210,
    background_img:'fest_classical2.jpg'
  },
  {
    name: 'born to rock',
    location: 'San Mateo',
   // starting_date: 'September 23, 2021 08:30:00',
   // ending_date: 'December 21, 2021 20:30:00',
    description: 'nothing but rock',
    ticket_price: 250.65,
    background_img:'fest_rock3.jpg'
  },
  {
    name: 'pop for love',
    location: 'San Jose',
  //  starting_date: 'December 22, 2020 11:00:00',
 //   ending_date: 'March 19, 2021 19:00:00',
    description: 'a short moment for your beloved ones',
    ticket_price: 140,
    background_img:'fest_pop4.jpg'
  },
  {
    name: '2000s pop songs',
    location: 'Cupertino',
  //  starting_date: 'December 22, 2020 11:00:00',
   // ending_date: 'March 19, 2021 19:00:00',
    description: 'a short moment for your beloved ones',
    ticket_price: 140,
    background_img:'fest_pop2.jpg'
  },
  {
    name: 'Jazz za la tina',
    location: 'Milpitas',
  //  starting_date: 'December 22, 2020 11:00:00',
   // ending_date: 'March 19, 2021 19:00:00',
    description: 'jazz pa na ta ci pa',
    ticket_price: 140,
    background_img:'fest_jazz3.jpg'
  },
  {
    name: 'Country Music',
    location: 'San Francisco',
  //  starting_date: 'December 22, 2020 11:00:00',
  //  ending_date: 'March 19, 2021 19:00:00',
    description: 'country music is life',
    ticket_price: 140,
    background_img:'fest_country1.jpg'
  },
];

const seedFestival = () => Festival.bulkCreate(festivaldata);

module.exports = seedFestival;
