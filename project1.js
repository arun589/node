const http=require("http");
const requesthandler = require("./router");
//const fs=require("fs");
const server=http.createServer(requesthandler);
server.listen(4000);