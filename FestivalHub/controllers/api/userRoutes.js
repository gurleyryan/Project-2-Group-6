const router = require('express').Router();
const { User } = require('../../models');

router.post('/register', async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ where: { email: req.body.email } });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, // You might want to hash the password before saving it
    });

    // Set up user session
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.json({ user: newUser, message: 'User registered and logged in!' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
