var webpack = require('webpack');
var config = require('./webpack.local.config');

var app = new require('express')();
var port = 8080;

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌍  Open up http://localhost:%s/ in your browser.', port);
  }
});