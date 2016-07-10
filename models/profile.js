var mongoose = require('mongoose');

var ProfileSchema = mongoose.Schema({
	id: Number,
	name: String,
	github_link: String,
	github_profile_image: String,
	current_city: String,
	pets: Array
});

var Profile = mongoose.model('Profile',ProfileSchema);

module.exports = Profile;