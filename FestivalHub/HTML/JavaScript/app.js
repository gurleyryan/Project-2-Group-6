const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Create an instance of Express
const app = express();

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// Sample data - Users
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET /users - Retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//Routes
app.use('/',routes);

// GET /users/:id - Retrieve a single user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - Update an existing user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  const index = users.findIndex(user => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[index] = { ...users[index], ...updateUser };
  res.json(users[index]);
});

// DELETE /users/:id - Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const deletedUser = users.splice(index, 1);
  res.json(deletedUser);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
