const router = require('express').Router();
const { Festival, User, Performer,Review,Booking,Image} = require('../../models');
  //------------------------------------------------Users
  
// enter this url to your web browser: http://localhost:3001/api/users
  router.get('/', async (req, res) => {
	try {
	  const userData = await User.findAll({
		attributes: { exclude: ['password'] },
		include: [{
		  model: Review,
		  attributes: ['festival_id','review','review_date'], 
		},
		{
			model: Booking,
			attributes: ['festival_id',['number_ofticket', 'number of ticket'],'booking_date','ticket_price'], 
		  }],
  });
  
	  const Users = userData.map((user) => user.get({ plain: true }));
  
	//   res.render('homepage', 
	//    {performers } );
  
	   res.status(200).json(Users);
	}
	
	catch (err) {
	  res.status(500).json(err);
	}
  });



  router.get('/:id', async (req, res) => {
	try {
		const userID = await User.findByPk(req.params.id, {
			attributes: { exclude: ['password'] },
		include: [{
		  model: Review,
		  attributes: ['festival_id','review','review_date'], 
		},
		{
			model: Booking,
			attributes: ['festival_id',['number_ofticket', 'number of ticket'],'booking_date','ticket_price'], 
		  }],
		});

		const user = userID.get({
			plain: true
		});

	// 	res.render('blogView', {
	// 		...blog,
	// 		logged_in: req.session.logged_in,
	// 		user_name: req.session.user_name,
    //   user_id:req.session.user_id,
    
	// 	});
	res.status(200).json(user);

	} catch (err) {
		res.status(500).json(err);
		
	}
  });



  router.post('/',async (req, res) => {
	try {
	  const createUser = await User.create({
		...req.body
	
	  });
  
	  res.status(200).json(createUser);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

  router.delete('/:id', async (req, res) => {
	try {
	  const userDelete = await User.destroy({
		where: {
		  id: req.params.id,
	
		},
	  });
  
	  if (!userDelete) {
		res.status(404).json({ message: 'No user found with this id!' });
		return;
	  }
  
	  res.status(200).json(userDelete);
	} catch (err) {
	  res.status(500).json(err);
	}
  });

  module.exports = router;

  /*
   




  router.post('/',async (req, res) => {
	try {
	  const createFestival = await Festival.create({
		...req.body
	
	  });
  
	  res.status(200).json(createFestival);
	} catch (err) {
	  res.status(400).json(err);
	}
  });
  


  */