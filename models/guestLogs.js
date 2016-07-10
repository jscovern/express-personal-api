var mongoose = require('mongoose');

var GuestLogSchema = mongoose.Schema({
	_id: String,
	name: String,
	date_signed: {type: Date, default: Date.now},
	message: String
});

var GuestLog = mongoose.model('GuestLog',GuestLogSchema);

module.exports = GuestLog;