var http = require('http');
var random = require('./random');
var usd = require('./usd');
var balance = require('./balance');

// console.log(balance);

http.createServer(function(req, res) {
  console.log('is this showing?');
res.writeHead(200);
res.write(balance.sendMessage() + balance.sendNumber(100, 1000000));
res.end();


}).listen(3000);
