const http = require('http');
const url = require('url');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const productsRoute = require('./routes/products');
const subscribeRoute = require('./routes/subscribe');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const pathName = parsedUrl.pathname;

  switch (pathName) {
    case '/about':
      aboutRoute(request, response);
      break;
    case '/contact':
      contactRoute(request, response);
      break;
    case '/products':
      productsRoute(request, response);
      break;
    case '/subscribe':
      subscribeRoute(request, response);
      break;
    default:
      console.log('Default route');
      response.end('Home Page');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
