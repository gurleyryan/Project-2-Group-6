const router = require('express').Router();
const { Festival, User, Performer,Review,Booking,Image} = require('../../models');
const withAuth = require('../../utils/auth');
  //------------------------------------------------Users
  
// enter this url to your web browser: http://localhost:3001/api/users
  router.get('/', withAuth,async (req, res) => {
	try {
	  const userData = await User.findAll({
		attributes: { exclude: ['password'] },
		include: [{
		  model: Review,
		  attributes: ['festival_id','review','review_date'], 
		},
		{
			model: Booking,
			attributes: ['festival_id',['number_ofticket', 'number of ticket'],'booking_date'], 
		  }],
  });
  
	  const Users = userData.map((user) => user.get({ plain: true }));
  
	//   res.render('homepage', 
	//    {performers} );
  
	   res.status(200).json(Users);
	}
	
	catch (err) {
	  res.status(500).json(err);
	}
  });



  router.get('/:id',withAuth,async (req, res) => {
	try {
		const userID = await User.findByPk(req.params.id, {
			attributes: { exclude: ['password'] },
		include: [{
		  model: Review,
		  attributes: ['festival_id','review','review_date'], 
		},
		{
			model: Booking,
			attributes: ['festival_id',['number_ofticket', 'number of ticket'],'booking_date'], 
		  }],
		});

		const user = userID.get({
			plain: true
		});

			res.render('user-info', {
			...user,
			logged_in: req.session.logged_in,
			user_name: req.session.user_name,
      		user_id:   req.session.user_id,
    
		});
	//res.status(200).json(user);

	} catch (err) {
		res.status(500).json(err);
		
	}
  });



  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect user or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect user or password, please try again' });
        return;
      }
        
	  	req.session.save(() => {
		req.session.user_id = userData.id;
		req.session.user_name = userData.username;
		req.session.logged_in = true;
		
		res.json({ user: userData, message: 'You are now logged in!' });
	  });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


  router.post('/signup',async (req, res) => {
	try {
	  const createUser = await User.create({
		...req.body
	
	  });
  
	  	req.session.save(() => {
		req.session.user_id = createUser.id;
		req.session.user_name = createUser.username;
		req.session.logged_in = true;

	  });
	  res.status(200).json(createUser);
	} catch (err) {
	  res.status(400).json(err);
	}
  });


  router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
	  req.session.destroy(() => {
		res.status(204).end();
	  });
	} else {
	  res.status(404).end();
	}
  });
  
  
  router.delete('/delete/:id', async (req, res) => {
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




  router.get('/edit/:id',withAuth,async (req, res) => {
	try {
		const userID = await User.findByPk(req.params.id, {
			attributes: { exclude: ['password'] },
		});

		const user = userID.get({
			plain: true
		});

			res.render('change_email', {
			...user,
			logged_in: req.session.logged_in,
			user_name: req.session.user_name,
      		user_id:   req.session.user_id,
    
		});
	//res.status(200).json(user);

	} catch (err) {
		res.status(500).json(err);
		
	}
  });

  router.put('/edit/:id',withAuth,async (req, res) => {
	try {
	  const updatedEmail = await User.update(
		{
		  //blog_name: req.body.blog_name,
		  email: req.body.email,
		
		},
		{
		  where: {
			  id: req.params.id,
		  },
	  })
	  if (!updatedEmail) {
		res
		  .status(404)
		  .json({ message: `No email found with id = ${req.params.id}` });
		return;
	  }

	} catch (err) {
	  res.status(400).json(err);
	}
  });





  module.exports = router;

