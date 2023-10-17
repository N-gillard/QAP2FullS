const fs = require('fs');

function aboutRoute(request, response) {
  fs.readFile('./views/about.html', (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('File not found');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    }
  });
}

module.exports = aboutRoute;
