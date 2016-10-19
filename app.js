var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render('pages/index');
});

app.get("/connect", function(req, res) {
  res.render('pages/connect');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('UNFOUND PAGE!');
});

app.listen(8080);
