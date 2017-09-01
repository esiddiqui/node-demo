var express = require('express');
var bodyParser = require ('body-parser');
var path = require('path');
var mongo = require('mongodb').MongoClient;

var employeeRepository = require('./db/employee');

var app = express();

var mongoDbUrl = 'mongodb://localhost:27017/ehteshamdb';



app.get('/', function(req,res){
    console.log("attempting to connect to db");
    mongo.connect(mongoDbUrl, function(err, db) {
        console.log('Connected to mongoDB @ ' + mongoDbUrl);
        employeeRepository.findAll(db,function(err,data){
            if (err) {
                console.log(err);
                res.send(500,err);
            } 
            res.json(data);
        });
    });
});

app.listen(3000,function(){
    console.log("Node/Express server started");
});