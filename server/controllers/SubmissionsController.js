var restful = require('node-restful');


module.exports = function (app, route) {

	// Set up the Controller for REST

	var rest = restful.model(
		'submission',
		app.models.submission
	).methods(['get','put','post','delete']);


	// Register this endpoint with the application

	rest.register(app, route);

	// Return Middleware

	return function(req, res, next) {
		next();
	};
};