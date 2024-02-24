// enter this url to your web browser: http://localhost:3001/api/review

const router = require('express').Router();
const moment = require('moment');
const { Festival, User, Performer,Review,Booking,Image} = require('../../models');
const { TIME } = require('sequelize');
  //------------------------------------------------Users
  

  router.get('/', async (req, res) => {
	try {
	  const reviewData = await Review.findAll({
		include: [{
		  model: Festival,
		  attributes: ['name'], 
		},
		{
			model: User,
			attributes: ['username','email'], 
		}],
  });
  
	  const reviews = reviewData.map((review) => review.get({ plain: true }));
  
	//   res.render('homepage', 
	//    {performers } );
  
	   res.status(200).json(reviews);
	}
	
	catch (err) {
	  res.status(500).json(err);
	}
  });



  router.get('/:id', async (req, res) => {
	try {
		const reviewID = await Review.findByPk(req.params.id, {
			include: [{
				model: Festival,
				attributes: ['name'], 
			  },
			  {
				  model: User,
				  attributes: ['username','email'], 
			  }],
		});

		const review = reviewID.get({
			plain: true
		});

	// 	res.render('blogView', {
	// 		...blog,
	// 		logged_in: req.session.logged_in,
	// 		user_name: req.session.user_name,
    //   user_id:req.session.user_id,
    
	// 	});
	res.status(200).json(review);

	} catch (err) {
		res.status(500).json(err);
		
	}
  });



  router.post('/',async (req, res) => {
	try {
	  const createReview = await Review.create({
		...req.body
	
	  });
  
	  res.status(200).json(createReview);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

  router.delete('/:id', async (req, res) => {
	try {
	  const reviewDelete = await Review.destroy({
		where: {
		  id: req.params.id,
	
		},
	  });
  
	  if (!reviewDelete) {
		res.status(404).json({ message: 'No review found with this id!' });
		return;
	  }
  
	  res.status(200).json(reviewDelete);
	} catch (err) {
	  res.status(500).json(err);
	}
  });



  router.put('/:id',async (req, res) => {
	try {
		
	  const updatedReview = await Review.update(
		{
		  //blog_name: req.body.blog_name,
		  review: req.body.review,
		  revew_date:new Date().toLocaleTimeString()

		
		
		},
		{
		  where: {
			  id: req.params.id,
		  },
	  })
	  if (!updatedReview) {
		res
		  .status(404)
		  .json({ message: `No comment found with id = ${req.params.id}` });
		return;
	  }
	  res.status(200).json(updatedReview);
	} catch (err) {
	  res.status(400).json(err);
	}
  });
  

  module.exports = router;

  