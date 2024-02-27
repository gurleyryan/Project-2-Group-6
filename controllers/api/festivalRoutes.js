const router = require('express').Router();
const { Festival, User, Performer,Review,Booking,Image} = require('../../models');
const withAuth = require('../../utils/auth');
  //------------------------------------------------Festival
// enter this url to your web browser: http://localhost:3001/api/festival

  router.get('/:id',withAuth, async (req, res) => {
	try {
		const festivalDatabyID = await Festival.findByPk(req.params.id, {
			include: [
				{
					model: Performer,
					attributes: ['performer_name','genre','description'],
					include: [
						{
						model: Image,
						attributes: ['image_file','description']
						}
					]
				}
			
			],
		});

		const festival = festivalDatabyID.get({
			plain: true
		});

		res.render('festival', {
			...festival,
			logged_in: req.session.logged_in,
			user_name: req.session.user_name,
      		user_id:req.session.user_id,
    
		});
	// res.status(200).json(festival);

	} catch (err) {
		res.status(500).json(err);
		
		
	}
  });




  router.post('/',withAuth,async (req, res) => {
	try {
	  const createFestival = await Festival.create({
		...req.body,
		user_id: req.session.user_id
	
	  });
  
	  res.status(200).json(createFestival);
	} catch (err) {
	  res.status(400).json(err);
	}
  });
  

  router.delete('/:id',withAuth, async (req, res) => {
	try {
	  const festivalDelete = await Festival.destroy({
		where: {
		  id: req.params.id,
		  user_id: req.session.user_id,
	
		},
	  });
  
	  if (!festivalDelete) {
		res.status(404).json({ message: 'No festival found with this id!' });
		return;
	  }
  
	  res.status(200).json(festivalDelete);
	} catch (err) {
	  res.status(500).json(err);
	}
  });




  router.get('/booking/:id',withAuth, async (req, res) => {
	try {
		const festivalDatabyID = await Festival.findByPk(req.params.id, {
			include: [
				{
					model: Performer,
					attributes: ['performer_name','genre','description'],
					include: [
						{
						model: Image,
						attributes: ['image_file','description']
						}
					]
				}
			
			],
		});

		const festival = festivalDatabyID.get({
			plain: true
		});

		res.render('bookingOrderform', {
			...festival,
			logged_in: req.session.logged_in,
			user_name: req.session.user_name,
      		user_id:req.session.user_id,
    
		});
	// res.status(200).json(festival);

	} catch (err) {
		res.status(500).json(err);
		
		
	}
  });

  module.exports = router;