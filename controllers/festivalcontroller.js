// controllers/festivalController.js

const Festival = require('../models/Festival');

module.exports = {
    getAll: async (req, res) => {
        try {
            const festivals = await Festival.find();
            res.json(festivals);
        } catch (err) {
            console.error(err)
            res.status(500).json({ message: 'Server Interrupted'});
        }
    }
}
        async (req, res) => {
            try {
                const newFestival = await Festival.create(req.body);
                res.status(201).json(newFestival);
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: 'Server Error'});
            }
        };

//To ensure the effeciency of interaction with the database to retrieve festival and add new festivals.
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
