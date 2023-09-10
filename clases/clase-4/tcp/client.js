// TCP client
// client.js

const net = require('net');
const client = new net.Socket();

client.connect(8080, '127.0.0.1', function() {
	console.log('1) Socket connected');
	console.log('2) Write: Hola');
	client.write('Hola');
});

client.on('data', function(data) {
	console.log('3) Received: ' + data);
	client.end();
});

client.on('close', function() {
	console.log('4) Connection closed');
});
