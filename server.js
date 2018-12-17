//////////////////////////////////// 
// DEPENDENCIES 

var express = require("express");
var path = require("path");
var fs = require("file-system");

//////////////////////////////////// 
// EXPRESS CONFIGURATION

var app = express();

app.use("/public", express.static(__dirname + '/public'));

// Sets an initial port. We"ll use this in our listener
var PORT = process.env.PORT || 5000;

//////////////////////////////////// 
// ROUTER

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/resume', function (req, res) {
  var data = fs.readFileSync('./public/assets/crystalespaillat-resume.pdf');
  res.contentType("application/pdf");
  res.send(data);
});

//////////////////////////////////// 
// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});