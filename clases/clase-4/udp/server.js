// UDP server
// server.js

const udp = require('dgram');
const server = udp.createSocket('udp4');

server.on('message', function (msg,info) {
  console.log('2) Received: ' + msg.toString());

  const remoteAddress = info.address;
  const remotePort = info.port;

  console.log('3) Write: Mundo');
  server.send('Mundo', remotePort, remoteAddress);
});

server.on('listening', function() {
  console.log('1) Server started');
});

server.bind(8080);
