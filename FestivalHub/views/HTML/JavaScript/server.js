// Import the Express module
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const kaleidoscope= document.getElementById('kaleidoscope');

// Create an Express application
const app = express();
const server = process.env.PORT || 3000;

//set up  handlebars as default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Handle set as default template engine
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

//Create festivalhub logo
const logo=document.createElement ('img');
logo.src='festivalhub-logo.png';
logo.alt="FestivalHub";
logo.classList.add('logo');
kaleidoscope.appendChild(logo);

// kaleidoscope effect
for(let i=0; i<6; i++){
  const segment=document.createElement('div');
  segment.classList.add('segment');
  segment.style.transform='rotate(${60 * i}deg)';
  kaleidoscope.appendChild(segment);
};

//Initialize Socket
const io = socketIo(server);

//handle Sovket.io connections
io.on('connection', (socket) => {
    console.log('A user connected');
//chat messages
socket.on('chat message', (msg) => {
    console.log('Message', msg);
    io.emit('chat message', msg);
});
});

//Handle disconnection
socket.on('disconnect', () => {
    console.log('User disconnected');
});

// Start the server
app.listen(PORT,() => {
    console.log('Server listening on: http://localhost:'+ PORT);
});


