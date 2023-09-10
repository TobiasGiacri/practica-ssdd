// UDP client
// client.js

const udp = require('dgram');
const client = udp.createSocket('udp4');

client.on('message', function (msg) {
  console.log('2) Received: ' + msg.toString());
  client.close();
});

console.log('1) Write: Hola')
client.send('Hola', 8080, 'localhost');

client.on('close', function (msg) {
  console.log('3) Close socket');
});
