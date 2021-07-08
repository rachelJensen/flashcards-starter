const http = require('http');
let app = http.createServer();
// const data = require('./src/data.js');
const Game = require('./src/Game.js');
let game = new Game();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

game.start();
