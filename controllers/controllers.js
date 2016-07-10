var Profile = require('../models/profile');
var GuestLog = require('../models/guestLogs');
//INDEX

function returnAll(req,res) {
	Profile.find(function(error, profiles) {
		console.log("inside the find in returnAll for profiles");	
		if(error) response.json({message: 'Could not find any profiles'});
		res.json(profiles);
	});
}

function postProfile(req,res) {
	console.log('in POST');
	var profile = new Profile(req.body);
	profile.save(function(error) {
		if(error) res.json({message: "Could not create quote b/c: "+error});
	});
	res.redirect('/profile');
}

function getAllGuestLogs(req,res) {
	GuestLog.find(function(error,guestLogs) {
		if(error){ 
			res.json({message: "Could not find any guest logs"});
		}
		res.json(guestLogs);
		console.log("these are the guest logs returned from getallguest logs: "+guestLogs);
		console.log("trying to get only one guest log, for index 1 "+guestLogs[1]);
		return guestLogs;
	});
}

function postNewLog(req,res) {
	var log = new GuestLog(req.body);
	log.save(function(error) {
		if(error){ 
			res.json({message: "Could not create a new guest log b/c: "+error});
		}
	});
	res.json(log);
	console.log("outputing this from postNewLog" +log);
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