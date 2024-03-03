const router = require('express').Router();
const { Festival, User, Performer,Review,Booking,Image} = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');


router.get('/',async (req, res) => {
  try {
    const festivalData = await Festival.findAll({include: [{
		model: Performer,
		attributes: ['performer_name'],
	},],
});

    const festivals = festivalData.map((festival) => festival.get({ plain: true }));

    res.render('homepage', 
     {festivals,	
	  logged_in: req.session.logged_in,
	  user_name: req.session.user_name,}
	 );

	 //res.status(200).json(festivals);
  }
  
  catch (err) {
    res.status(500).json(err);
  }
});



router.get("/dashboard",withAuth,(req, res) => {
	Booking.findAll({
		where: {
      	user_id: req.session.user_id // this will change when user log in
		},
    attributes:
    {
       include:[ 'number_ofticket','booking_date',[ sequelize.literal('`ticket_price` * `number_ofticket`'), 'ticketPurchased_price'],],
       raw:true
    },
		include: [
		  {
			model: Festival,
			attributes: ['id', 'name', 'location', 'description','ticket_price'],
      include: {
        
			  model: Performer,
			  attributes: ['performer_name','description'],
        
			},
		  },
    
		],
  
    
	  })
		.then((bookingData) => {
		  const books = bookingData.map((book) => book.get({ plain: true }));
		  res.render('dashboard', {
			books,
			logged_in: true,
			user_name: req.session.user_name,
			user_id:req.session.user_id
		  });
     // res.status(200).json(books);
		})
		.catch((err) => {
		  console.log(err);
		  res.status(500).json(err);
		});
	});




router.get('/login', (req, res) => {
  if (req.session.logged_in) {
      res.redirect('/');
      return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
      res.redirect('/');
      return;
  }
  res.render('signup');
});




  module.exports = router;
