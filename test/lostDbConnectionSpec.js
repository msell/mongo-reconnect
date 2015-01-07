var express = require('express');
var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var bodyParser = require('body-parser');
var mongoose = require('../mongoose.js');
var app = require('../app.js');


describe('sunny day', function () {
    

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