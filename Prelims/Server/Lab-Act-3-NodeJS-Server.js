var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content.Type': 'text/html' });
    res.write(
      '<html><body><center><p><h1>Welcome to my Node.js Application.</h1>Welcome Erniella Jean S. Manalansan. This is an activity about basics of Node.js<br>WD - 202<br>You are in root. </p></center></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content.Type': 'text/html' });
    res.write(
      '<html><body><center><p><h1>Welcome to my Node.js Application.</h1>Welcome Erniella Jean S. Manalansan. This is an activity about basics of Node.js<br>WD - 202<br>You are in about. </p></center></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content.Type': 'text/html' });
    res.write(
      '<html><body><center><p><h1>Welcome to my Node.js Application.</h1>Welcome Erniella Jean S. Manalansan. This is an activity about basics of Node.js<br>WD - 202<br>You are in contact. </p></center></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content.Type': 'text/html' });
    res.write(
      '<html><body><center><p><h1>Welcome to my Node.js Application.</h1>Welcome Erniella Jean S. Manalansan. This is an activity about basics of Node.js<br>WD - 202<br>You are in gallery. </p></center></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');

// Erniella Jean S. Manalansan.      |      02/01/23.    |. WD - 202
