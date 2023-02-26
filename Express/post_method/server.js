const express = require('express');
const app = express();
//require body-parser for this method
const bodyParser = require('body-parser');
//create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
  //Prepare output in JSON format
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(3000, function () {
  console.log('Server is running');
});
