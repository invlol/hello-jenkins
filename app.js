/*var http = require('http');

var app = function(req, res) {
res.end('hello world');
};

http.createServer(app)
  .listen(5000, function(err) {
    if (err) return cb(err);

    // Find out which user used sudo through the environment variable
    var uid = parseInt(process.env.SUDO_UID);
    // Set our server's uid to that user
    if (uid) process.setuid(uid);
    console.log('Server\'s UID is now ' + process.getuid());
  });
*/

var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world2');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;

/*
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
*/
