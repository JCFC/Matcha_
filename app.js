var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.setHeader('Content-type', 'text/plain');
  res.end('HOME');
});

app.listen(8080);
