const fs = require('fs');
const eventEmitter = require('./eventEmitter'); // Import the event emitter

function productsRoute(request, response) {
  // Emit an event when the "/products" route is accessed
  eventEmitter.emit('routeAccess', '/products');

  fs.readFile('./views/products.html', (error, data) => {
    if (error) {
      // Emit an event when a file is not available
      eventEmitter.emit('fileNotAvailable', 'products.html');
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('File not found');
    } else {
      // Emit an event when a file is successfully read
      eventEmitter.emit('fileReadSuccess', 'products.html');
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    }
  });
}

module.exports = productsRoute;
