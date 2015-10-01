var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema( {
	id : {
		type : String,
		required : true
	},
	questionText : {
		type : String,
		required : true
	},
	option1 : {
		type : String,
		required : true
	},
	option2 : {
		type : String,
		required : true
	},
	option3 : {
		type : String,
		required : true
	},
	option4 : {
		type : String,
		required : true
	},
	correctOption : {
		type : String,
		required : true
	},
	score : {
		type : String,
		required : true
	}

});

// Export the Person Schema

module.exports = QuestionSchema;