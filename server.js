/**
 * A Very simple express server to demostrate the use of Cache-Control header
 */


var express = require('express');
var app = express();

var counter = 0
// Change the max age - keep in mind its in seconds
var MAX_AGE = 15

app.use(express.static('public'))

app.get('/cachetest', function (req, res) {
    // Set the headers
    res.header('Cache-Control', 'public, max-age='+MAX_AGE);

    // Increment the counter
    counter++
    console.log('recvd ' + counter)

    // Response data
    data = {
        value: "Hello Cache !!!",
        counter: counter
      };
    res.send(JSON.stringify(data));
});

// Listen on http port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});