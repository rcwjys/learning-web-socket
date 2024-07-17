import { io } from 'socket.io-client';

const socket = io('http://localhost:8182', {
  auth: {
    token: '08f42cca93c1b277056b84afd79e1b9349d6169ee55482c6e1ebb24c42409c3b1c63a646468d7f8d49acef3d890d47ee3fc70629a52abe0269f42d58c43fa604'
  }
});



socket.on('connect', () => {
  console.log(`Connected to server with ID: ${socket.id}`);
});

