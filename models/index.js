const User = require('./User');
const Festival = require('./Festival');
const Performer = require('./Performer');
const Review = require('./Review');
const Booking = require('./Booking');
const Image = require('./Image');

Festival.hasMany(Performer, {
  foreignKey: 'festival_id',
  onDelete: 'CASCADE'
});

Performer.belongsTo(Festival, {
  foreignKey: 'festival_id',
});


//________________________________________________________

Festival.hasMany(Booking, {
    foreignKey: 'festival_id',
    onDelete: "CASCADE",
  });
  
  Booking.belongsTo(Festival, {
    foreignKey: 'festival_id',
  });

  
  //________________________________________________________

Festival.hasMany(Review, {
    foreignKey: 'festival_id',
    onDelete: "CASCADE"

  });
  
Review.belongsTo(Festival, {
    foreignKey: 'festival_id',
  });
  
  

//________________________________________________________

User.hasMany(Booking, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
  });
  
Booking.belongsTo(User, {
    foreignKey: 'user_id',
  });


//________________________________________________________

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"

  });
  
  Review.belongsTo(User, {
    foreignKey: 'user_id',
  });

//________________________________________________________

Performer.hasMany(Image, {
  foreignKey: 'performer_id',
  onDelete: "CASCADE",

});

Image.belongsTo(Performer, {
  foreignKey: 'performer_id',
});



  
module.exports = { User, Festival, Performer, Review, Booking, Image };
