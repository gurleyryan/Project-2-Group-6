exports.getAllFestivals = async (req, res) => {
    try {
      const festivals = await Festival.findAll();
      res.render('index', { festivals });
    } catch (error) {
      console.error('Error fetching festivals:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  exports.addFestival = async (req, res) => {
    try {
      const { name, location, startDate, endDate } = req.body;
      await Festival.create({ name, location, startDate, endDate });
      res.redirect('/');
    } catch (error) {
      console.error('Error adding festival:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  