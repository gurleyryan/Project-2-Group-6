const { User } = require('../models');

const userData = [
    {
        username: "sal",
        email: "sal@hotmail.com",
        password: "password12345",
        preference: "rock"
      },
      {
        username: "lernantino",
        email: "lernantino@gmail.com",
        password: "password12345",
        preference: "rock"
      },
      {
        username: "amiko",
        email: "amiko2k20@aol.com",
        password: "password12345",
        preference: "jazz"
      },
      {
        username: "jordan",
        email: "jordan99@msn.com",
        password: "password12345",
        preference: "pop"
      },
      {
        username: "blake",
        email: "the_blake@yahoo.com",
        password: "password12345",
        preference: "classical"
      },
      {
        username: "jackson",
        email: "jackson@yahoo.com",
        password: "password12345",
        preference: "country"
      }
];

const seedUser = () => User.bulkCreate(userData,{
  validate:true,
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
