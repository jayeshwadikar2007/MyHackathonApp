var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var nodemailer = require('nodemailer');

// Create the Application

var app = express();

// Add Middleware necessary for REST API's

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
// This essentially makes your API public
app.use(function(req, res, next) {

	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();

});


// Connect to MongoDB

mongoose.connect('mongodb://localhost/myhackathonapp');
mongoose.connection.once('open',function () {

	// Load the models

	app.models = require('./models/index');

	// Load the routes.
  var routes = require('./routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

	console.log('Inside Connection');
	app.listen(3000);

});


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jayesh.wadikar2007@gmail.com',
        pass: 'HelloWorld123'
    }
});
transporter.sendMail({
    from: 'jayesh.wadikar2007@gmail.com',
    to: 'minaldamania.1@gmail.com',
    subject: 'MySub',
    text: 'New world!'
});

console.log('Sent Email2');
