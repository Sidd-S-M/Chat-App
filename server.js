const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinChannel', (channel) => {
    socket.join(channel);
    console.log(`Client joined channel: ${channel}`);
  });

  socket.on('message', ({ channel, message }) => {
    // Broadcast the message to all clients in the specified channel except the sender
    socket.broadcast.to(channel).emit('message', message);
    console.log(`Message: ${message}`);
  });
  

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
