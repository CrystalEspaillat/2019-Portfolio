//////////////////////////////////// 
// DEPENDENCIES 

var express = require("express");
var path = require("path");

//////////////////////////////////// 
// EXPRESS CONFIGURATION

var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

//////////////////////////////////// 
// ROUTER

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//////////////////////////////////// 
// LISTENER

// Sets an initial port. We"ll use this in our listener
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});