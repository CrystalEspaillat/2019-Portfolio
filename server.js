//////////////////////////////////// 
// DEPENDENCIES 

var express = require("express");
var path = require("path");

//////////////////////////////////// 
// EXPRESS CONFIGURATION

var app = express();

app.use("/public", express.static(__dirname + '/public'));

// Sets an initial port. We"ll use this in our listener
var PORT = process.env.PORT || 5000;

//////////////////////////////////// 
// ROUTER

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/assets/crytalespaillat-resume.pdf'));
});

//////////////////////////////////// 
// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});