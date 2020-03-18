var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var application = express();
application.set('view engine', 'ejs');
application.set('views', './app/views');

application.use(express.static('./app/public'));
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json()); //new
application.use(expressValidator());
application.use(function (req, res, next) { //new
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

consign()
    .include('app/routes')
    .then('config/connectionDB.js')
    .then('app/models')
    .then('app/controllers')
    .into(application);

module.exports = application;