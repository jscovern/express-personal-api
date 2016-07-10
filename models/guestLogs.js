var mongoose = require('mongoose');

var GuestLogSchema = mongoose.Schema({
	name: String,
	date_signed: String,
	message: String
});

var GuestLog = mongoose.model('GuestLog',GuestLogSchema);

module.exports = GuestLog;