const WebSocket = require('ws');
require('dotenv').config(); // Load environment variables

const WS_PORT = process.env.WS_PORT || 8080;

// Create WebSocket Server
const wss = new WebSocket.Server({ port: WS_PORT });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.send(JSON.stringify({ message: 'Welcome to the WebSocket server!' }));

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Broadcast message to all clients
const broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

console.log(`WebSocket server running on ws://localhost:${WS_PORT}`);

module.exports = { broadcast };
