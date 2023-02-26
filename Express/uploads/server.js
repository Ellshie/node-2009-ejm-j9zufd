const express = require('express');
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const app = express();

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage }).single('myFile');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/file_upload.html');
});

app.post('./uploads', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end('Error uploading file.');
    }
    res.sendFile(__dirname + '/file_uploaded.html');
  });
});
app.listen(7110, function () {
  console.log('Server is running');
});
