import { io } from 'socket.io-client';

const socket = io('http://localhost:8080', {
  auth: {
    token: "abc"
  }
});

socket.on('connect_error', (err) => {
  console.log('Connection error:', err.message);
});

socket.on('connect', () => {
  console.log(`Connected to server with ID: ${socket.id}`);
});
