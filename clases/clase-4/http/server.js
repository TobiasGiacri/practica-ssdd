// HTTP server
// server.js

const http = require('http');

const server = http.createServer(function (request, response) {
  console.log('2) Socket connected');

  let body = '';

  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
		console.log('3) Server received: ' + body)
		console.log('4) Write: Mundo')
    response.end('Mundo');
  });

  request.on('close', () => {
		console.log('5) Socket closed');
  });

});

server.listen(8080, function() {
  console.log('1) Server started');
});
