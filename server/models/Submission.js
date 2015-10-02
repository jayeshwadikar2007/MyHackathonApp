var mongoose = require('mongoose');

var SubmissionSchema = new mongoose.Schema( {
	studentID : {
		type : String,
		required : true
	},
	answerKey : {
		type : String,
		required : true
	}
});

// Export the Submission Schema

module.exports = SubmissionSchema;