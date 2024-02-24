const router = require('express').Router();
const { Festival, User, Performer,Review,Booking,Image} = require('../../models');
  //------------------------------------------------Users
  // enter this url to your web browser: http://localhost:3001/api/booking

  router.get('/', async (req, res) => {
	try {
	  const bookingData = await Booking.findAll({
		include: [{
		  model: Festival,
		  attributes: ['name','location'], 
		},
		{
			model: User,
			attributes: ['username','email'], 
		}],
  });
  
	  const bookings = bookingData.map((booking) => booking.get({ plain: true }));
  
	//   res.render('homepage', 
	//    {performers } );
  
	   res.status(200).json(bookings);
	}
	
	catch (err) {
	  res.status(500).json(err);
	}
  });



  router.get('/:id', async (req, res) => {
	try {
		const bookingID = await Booking.findByPk(req.params.id, {
			include: [{
				model: Festival,
				attributes: ['name','location'], 
			  },
			  {
				  model: User,
				  attributes: ['username','email'], 
			  }],
		});

		const booking = bookingID.get({
			plain: true
		});

	// 	res.render('blogView', {
	// 		...blog,
	// 		logged_in: req.session.logged_in,
	// 		user_name: req.session.user_name,
    //   user_id:req.session.user_id,
    
	// 	});
	res.status(200).json(booking);

	} catch (err) {
		res.status(500).json(err);
		
	}
  });



  router.post('/',async (req, res) => {
	try {
	  const createBooking = await Booking.create({
		...req.body
	
	  });
  
	  res.status(200).json(createBooking);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

  router.delete('/:id', async (req, res) => {
	try {
	  const bookingDelete = await Booking.destroy({
		where: {
		  id: req.params.id,
	
		},
	  });
  
	  if (!bookingDelete) {
		res.status(404).json({ message: 'No booking found with this id!' });
		return;
	  }
  
	  res.status(200).json(bookingDelete);
	} catch (err) {
	  res.status(500).json(err);
	}
  });

  module.exports = router;

  