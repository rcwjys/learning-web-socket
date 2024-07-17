import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost']
  }
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  // Check if token is missing or not valid
  if (!token || token !== 'abc') {
    return next(new Error('Authentication error: Invalid or missing token'));
  }

  // Token is valid, continue with connection
  return next();

});

io.on('connection', (socket) => {
  console.log('A user connected with ID:', socket.id);

  socket.on('disconnect', () => {
    console.log(`User disconnected with ID: ${socket.id}`);
  });
});

// Global error handler for connection errors
io.on('connect_error', (err) => {
  console.log('Global connection error:', err.message);
});

const PORT = 8080;
httpServer.listen(PORT, () => {
  console.log(`Socket.IO server listening on port ${PORT}`);
});
