const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

let bgr = "yo dj";

const server = http.createServer((req, res) => {
  // Set the Access-Control-Allow-Origin header to allow requests from http://localhost:5500
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(bgr);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// continue reading the node.js documentation and find how to get the connection into the res.end string
