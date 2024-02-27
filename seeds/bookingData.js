const { Booking, Festival } = require('../models');
const sequelize = require('../config/connection.js');


const bookingData = [
  {
    festival_id: '2',
    user_id: '1',
    //number_ofticket: 5,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1051.5
  },
  {
    festival_id: '3',
    user_id: '2',
   // number_ofticket: 3,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 2350
  },
  {
    festival_id: '4',
    user_id: '5',
  //  number_ofticket: 6,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1260.5
  },
  {
    festival_id: '3',
    user_id: '2',
   // number_ofticket: 4,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1000
  },
  {
    festival_id: '2',
    user_id: '1',
   // number_ofticket: 2,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1255
  },
  {
    festival_id: '2',
    user_id: '3',
   // number_ofticket: 8,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1051.5
  },
  {
    festival_id: '6',
    user_id: '2',
   // number_ofticket: 3,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1051.5
  },
  {
    festival_id: '7',
    user_id: '5',
   // number_ofticket: 3,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1051.5
  },
  {
    festival_id: '8',
    user_id: '3',
    //number_ofticket: 4,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1051.5
  },
  {
    festival_id: '9',
    user_id: '6',
    //number_ofticket: 4,
   // bookingDate:'December 21, 2021 20:30:00',
   //ticketPurchased_price: 1051.5
  },
];

// const seedBookingInit = () => Booking.bulkCreate(bookingData,{
 
// });
const seedBooking = async () => {

 


  for (const book of bookingData) {

    await Booking.create({
      ...book,
    number_ofticket: bookingData[Math.floor(Math.random() * bookingData.length)].festival_id-1, 
    });
   
  }
};
// const seedBooking = () => Booking.bulkCreate(bookingData);

module.exports = seedBooking;



