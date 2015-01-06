var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Widget = require('./models/Widget.js');
var app = express();

app.use(bodyParser.json());


app.get('/widget', function (req, res) {
    res.send(200, "ok");
})


mongoose.connect('mongodb://localhost/reconnect-issue');

// recreate data

var server = app.listen(3000, function () {
    console.log('api listening on ', server.address().port);
});