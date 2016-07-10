var mongoose = require('mongoose');

var GuestLogSchema = mongoose.Schema({
	_id: String,
	name: String,
	message: String
}, 
{
	timestamps: true
});

var GuestLog = mongoose.model('GuestLog',GuestLogSchema);

module.exports = GuestLog;