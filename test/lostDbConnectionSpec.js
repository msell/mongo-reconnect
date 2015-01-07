var express = require('express');
var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var app = {};
var bodyParser = require('body-parser');
var mongoose = require('../mongoose.js');


describe('sunny day', function () {
    before(function(){
         mongoose.connect();
    })
    
    after(function(){
        mongoose.disconnect();
    })
    
    beforeEach(function () {
        app = express();
        app.use(bodyParser.json());

        app.post('/widget', function (req, res) {
            res.json({
                'name': 'foo'
            });
        })
        
        app.get('/widget', function (req, res, next) {
            res.status(200).send('ok');
            next();
        })     
           
       
    });

        it('should be able to add widgets', function (done) {
            request(app).post('/widget')
                .send({
                    'name': 'foo'
                })
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
    it('should be able to get widgets', function (done) {

        request(app).get('/widget')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                done();
            });

    });
});