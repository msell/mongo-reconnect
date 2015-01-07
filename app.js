var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Widget = require('./models/Widget.js');
var app = express();

app.use(bodyParser.json());


app.get('/widget', function (req, res, next) {
    res.status(200).send('ok');
    next();
})

app.post('/widget', function(req, res){
    res.json({'name':'foo'});    
})

module.exports = app;