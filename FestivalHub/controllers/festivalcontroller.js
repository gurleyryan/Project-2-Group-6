// controllers/festivalController.js

const Festival = require('../models/Festival');


    exports.getAllFestivals = async (req, res) => {
        try {
            const festivals = await Festival.find();
            res.json(festivals);
        } catch (err) {
            console.error('Error fetching festivals:',err);
            res.status(500).json({ message: 'Server Error'});
        }
    };

        exports.addFestival = async (req, res) => {
            try {
                const newFestival = await Festival.create(req.body);
                res.status(201).json(newFestival);
            } catch (err) {
                console.error('Error adding festivals:',err);
                res.status(500).json({ message: 'Server Error'});
            }
        };

//To ensure the effeciency of interaction with the database to retrieve festival and add new festivals.
exports.getAllFestivals = async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.json(festivals );
  } catch (err) {
    console.error('Error fetching festivals:', err);
    res.status(500).json({ message: 'Server Error'});
  }
};

exports.addFestival = async (req, res) => { 
  try { 
    const { name, location, startDate, endDate } = req.body; 
    if (!name || !location || !startDate || !endDate) { 
      return res.status(400).json({ message: 'All fields are required' }); 
    } 
    await Festival.create({ name, location, startDate, endDate }); 
    res.status(201).json({ message: 'Festival added successfully' });
   } catch (err) {
     console.error('Error adding festival:', err); 
     res.status(500).json({ message: 'Server Error' }); 
   }
};
