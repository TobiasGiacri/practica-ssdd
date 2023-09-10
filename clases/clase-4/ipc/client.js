// IPC client
// client.js

// NOTA: Para la ruta del archivo en Windows ver: https://nodejs.org/api/net.html#net_ipc_support

const net = require('net');
const client = new net.Socket();

client.connect('./file', function() {
	console.log('1) Connected');
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
