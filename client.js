import { io } from 'socket.io-client';

const socket = io('http://localhost:8080');


const user1 = {
  name: "rico",
  age: 20,
}

socket.on('connect', () => {
  console.log(`Connected to server with ID: ${socket.id}`);
  socket.emit('create-user', user1);
});

