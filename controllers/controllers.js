var Profile = require('../models/profile.js');

//INDEX

function returnAll(req,res) {
	console.log("into returnAll for profiles");
	Profile.find(function(error, profiles) {
		console.log("inside the find in returnAll for profiles");	
		if(error) response.json({message: 'Could not find any profiles'});
		response.send("hello");
		//response.json(profiles);
	});
}

function postProfile(req,res) {
	console.log('in POST');
	var profile = new Profile(req.body);
	profile.save(function(error) {
		if(error) response.json({message: "Could not create quote b/c: "+error});
	});
	res.redirect('/profile');
}

function getAllGuestLogs(req,res) {

}

function postNewLog(req,res) {
	var log = new Log(req.body);
}

function getOneGuestsLogs(req,res) {
	var id = req.params.id;

}

function removePost(req,res) {
	var id = req.params.id;

}

function updatePost(req,res) {
	var id = req.params.id;

}

module.exports = {
	returnAll: returnAll,
	postProfile: postProfile,
	getAllGuestLogs: getAllGuestLogs,
	getOneGuestsLogs: getOneGuestsLogs,
	postNewLog: postNewLog,
	removePost: removePost,
	updatePost: updatePost
};