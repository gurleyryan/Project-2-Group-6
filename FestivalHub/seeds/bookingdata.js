const { Booking } = require('../Models');

const bookingData = [
  {
    festival_id: '2',
    user_id: '1',
    numberOfticket: 3,
    bookingDate:'December 21, 2021 20:30:00',
    ticket_price: 500
  },
  {
    festival_id: '3',
    user_id: '2',
    numberOfticket: 4,
    bookingDate:'December 21, 2021 20:30:00',
    ticket_price: 100
  },
  {
    festival_id: '4',
    user_id: '2',
    numberOfticket: 3,
    bookingDate:'December 21, 2021 20:30:00',
    ticket_price: 300
  },
  {
    festival_id: '3',
    user_id: '2',
    numberOfticket: 3,
    bookingDate:'December 21, 2021 20:30:00',
    ticket_price: 95.5
  },
  {
    festival_id: '2',
    user_id: '1',
    numberOfticket: 3,
    bookingDate:'December 21, 2021 20:30:00',
    ticket_price: 500
  },
  {
    festival_id: '2',
    user_id: '1',
    numberOfticket: 3,
    bookingDate:'December 21, 2021 20:30:00',
    ticket_price: 100
  },
];

const seedBooking = () => Booking.bulkCreate(bookingData);

module.exports = seedBooking;