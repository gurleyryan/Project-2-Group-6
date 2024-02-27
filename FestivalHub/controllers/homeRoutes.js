const router = require('express').Router();
const { Festival, User, Performer,Review,Booking,Image} = require('../models');
//const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    const festivalData = await Festival.findAll()
 const festivals = festivalData.map((festival) => festival.get({ plain: true }));
console.log(festivals);
    res.render('home',{festivals});
  }
  catch (err) {
    res.status(500).json(err);
  }
});





router.get('/login', (req, res) => {
  res.render('login');
});



router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
        
        res.json({ user: userData, message: 'You are now logged in!' });
    
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

  module.exports = router;
