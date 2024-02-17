const { User } = require('../Models');

const userData = [
    {
        username: "Sal",
        email: "sal@hotmail.com",
        password: "password12345",
        preference: "rock"
      },
      {
        username: "Lernantino",
        email: "lernantino@gmail.com",
        password: "password12345",
        preference: "rock"
      },
      {
        username: "Amiko",
        email: "amiko2k20@aol.com",
        password: "password12345",
        preference: "jazz"
      },
      {
        username: "Jordan",
        email: "jordan99@msn.com",
        password: "password12345",
        preference: "pop"
      },
      {
        username: "Blake",
        email: "the_blake@yahoo.com",
        password: "password12345",
        preference: "classical"
      }
];

const seedUser = () => User.bulkCreate(userData,{
  validate:true,
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;