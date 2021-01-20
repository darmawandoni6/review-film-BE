const http = require("http");
const app = require("./app");
// const config = require("./config/config");

const server = http.createServer(app);
const port = process.env.PORT || 5000;

console.log(`Server Port: ${port}`);
server.listen(port);
