const http = require('http')

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(JSON.stringify({secret:'chair'}))
  res.end();
}).listen(8080);

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(JSON.stringify({secret:'stool'}))
  res.end();
}).listen(8090);

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(JSON.stringify({secret:'fridge'}))
  res.end();
}).listen(8095);




// res.write('{secret : bubbly}');
// res.write(JSON.stringify({secret:chair}))