const express = require('express');
const router = express.Router();
const festivalController = require('./controllers/festivalController');

// Define routes
router.get('/festivals', festivalController.getAll);
router.post('/festivals', festivalController.create);

module.exports = router;

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);