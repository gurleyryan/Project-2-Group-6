const router = require('express').Router();
const { Festival, User, Performer,Review,Booking,Image} = require('../../models');
  //------------------------------------------------Performer
  
// enter this url to your web browser: http://localhost:3001/api/performer
  router.get('/', async (req, res) => {
	try {
	  const performerData = await Performer.findAll({
		include: [{
		  model:Image 
		}],
  });
  
	  const performers = performerData.map((performer) => performer.get({ plain: true }));
  
	//   res.render('homepage', 
	//    {performers } );
  
	   res.status(200).json(performers);
	}
	
	catch (err) {
	  res.status(500).json(err);
	}
  });



  router.get('/:id', async (req, res) => {
	try {
		const performerID = await Performer.findByPk(req.params.id, {
			include: [
				{
					model: Image,
					//attributes: ['image_file','description','perform'],
				}
			
			],
		});

		const performers = performerID.get({
			plain: true
		});

	// 	res.render('blogView', {
	// 		...blog,
	// 		logged_in: req.session.logged_in,
	// 		user_name: req.session.user_name,
    //   user_id:req.session.user_id,
    
	// 	});
	res.status(200).json(performers);

	} catch (err) {
		res.status(500).json(err);
		
	}
  });



  router.post('/',async (req, res) => {
	try {
	  const createPerformer = await Performer.create({
		...req.body
	
	  });
  
	  res.status(200).json(createPerformer);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

  router.delete('/:id', async (req, res) => {
	try {
	  const performerDelete = await Performer.destroy({
		where: {
		  id: req.params.id,
	
		},
	  });
  
	  if (!performerDelete) {
		res.status(404).json({ message: 'No performer found with this id!' });
		return;
	  }
  
	  res.status(200).json(performerDelete);
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