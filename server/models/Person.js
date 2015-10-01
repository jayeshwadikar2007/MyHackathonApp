var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema( {
	name : {
		type : String,
		required : true
	},
	idNumber : {
		type : String,
		required : true
	},
	role : {
		type : String,
		required : true
	}
});

// Export the Person Schema

module.exports = PersonSchema;