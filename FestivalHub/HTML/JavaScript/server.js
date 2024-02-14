// Import the Express module
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an Express application
const app = express();
const server = http.createServer(app);

//Initialize Socket
const io = socketIo(server);

//Handle stativ
app.use(express.static('public'));

//handle Sovket.io connections
io.on('connection', (socket) => {
    console.log('A user connected');
//chat messages
socket.on('chat message', (msg) => {
    console.log('Message', msg);
    io.emit('chat message', msg);
});
})

//Handle disconnection
socket.on('disconnect', () => {
    console.log('User disconnected');
});

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const PORT = process.env.PORT || 3000;
server.listen(PORT,() => {
    console.log('Server is running on port ${PORT}');
})


