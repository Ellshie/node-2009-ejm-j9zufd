const express = require('express');
const app = express();

//Serving static files
app.use(express.static('public'));

//Serving static file index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + index.html);
});

//Server Listener
//app.listen(3000, function(){
//    console.log('Server listening at port 3000...');
//});

//create 4 mmore routes - about,blog,upload,contract

//about
app.get('/about', (req, res) => {
  res.send('Hello World! This is the about page...');
});

//blog
app.get('/blog', (req, res) => {
  res.send('Hello World! This is the blog page...');
});

//upload
app.get('/upload', (req, res) => {
  res.send('Hello World! This is the upload page...');
});

//contract
app.get('/contract', (req, res) => {
  res.send('Hello World! This is the contract page...');
});

const path = require('path');
var errorPg = path.join(__dirname, './404.html');
//catch all endpoint will be Error Page
app.get('*', function (req, res) {
  res.sendFile(errorPg);
});
//app.all('*', (req, res) => {
//    res.status(404).send('<h1>404! Page not found </h1>');
//});
//Server Listener option 2
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
