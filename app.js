var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./mongoose');
var Widget = require('./models/Widget.js');
var timeout = require('connect-timeout');

var app = express();

app.use(bodyParser.json());
app.use(timeout('5s'));
app.use(haltOnTimedout);

app.get('/widget', function (req, res, next) {
    Widget.find(function (err, widgets) {
        if (err) return console.error(err);
        if (req.timedout) return;
        
        res.status(200).send(widgets);
        next();
    })
})

app.post('/widget', function (req, res) {
    var widget = new Widget(req.body);
    widget.save(function (err, widget) {
        if (err) return console.error(err);
        if (req.timedout) return;
        
        console.log('saved widget ' + widget);
    })
    res.json(res.body);
})

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

mongoose.connect();
module.exports = app;