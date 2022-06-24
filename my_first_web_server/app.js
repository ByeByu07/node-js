const http = require("http");

const config = (req, res) => {
  res.writeHead(200);
  res.end(`status code:${res.statusCode}`);
};

const makeServer = http.createServer(config);
makeServer.listen(3030);
