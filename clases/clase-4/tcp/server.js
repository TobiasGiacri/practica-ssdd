// TCP server
// server.js

const net = require('net');
const server = net.createServer(conexionEntrante);

server.listen(8080, function () {
  console.log('1) Server started');
});

function conexionEntrante (socket) {
  console.log('2) Socket connected');

	socket.on('data', function(data) {
		console.log('3) Server received: ' + data)
		console.log('4) Write: Mundo')
		socket.write('Mundo');
	});

	socket.on('close', function (msg) {
		console.log('5) Socket closed');
    server.close();
	});

}
