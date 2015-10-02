var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema( {
	id : {
		type : String,
		required : true
	},
	groupName : {
		type : String,
		required : true
	},
	memberName : {
		type : String,
		required : true
	},
	memberEmail : {
		type : String,
		required : true
	}
});

// Export the Person Schema

module.exports = GroupSchema;