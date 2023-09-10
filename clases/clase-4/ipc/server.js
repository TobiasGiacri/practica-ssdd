// IPC server
// server.js

// NOTA: Para la ruta del archivo en Windows ver: https://nodejs.org/api/net.html#net_ipc_support

const net = require('net');

const server = net.createServer(function(socket) {
  console.log('2) Socket connected');

	socket.on('data', function(data) {
		console.log('3) Server received: ' + data)
		console.log('4) Write: Mundo')
		socket.write('Mundo');
	});

	socket.on('close', function () {
		console.log('5) Socket closed');
	});

});

server.listen('./file', function () {
  console.log('1) Server started');
});
