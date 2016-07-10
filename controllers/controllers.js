var Profile = require('../models/profile');
var GuestLog = require('../models/guestLogs');
//INDEX

function returnAll(req,res) { //this works
	Profile.find(function(error, profiles) {
		console.log("inside the find in returnAll for profiles");	
		if(error) response.json({message: 'Could not find any profiles'});
		res.json(profiles);
	});
}

function postProfile(req,res) { //this works
	console.log('in POST');
	var profile = new Profile(req.body);
	profile.save(function(error) {
		if(error) res.json({message: "Could not create quote b/c: "+error});
	});
	res.redirect('/profile');
}

function getAllGuestLogs(req,res) { //this works
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

function postNewLog(req,res) { //this works
	var log = new GuestLog(req.body);
	log.save(function(error) {
		if(error){ 
			res.json({message: "Could not create a new guest log b/c: "+error});
		}
	});
	res.json(log);
	console.log("outputing this from postNewLog" +log);
}

function getOneGuestsLogs(req,res) { //this works
	var id = req.params.id;
	GuestLog.findById({_id: id}, function(error, guestLogs) {
		if(error) {
			res.json({message: 'Could not find the guest log b/c ' + error});
		}
		res.json(guestLogs);
	});

}

function removePost(req,res) {
	var id = req.params.id;
	GuestLog.remove({_id: id}, function(error) {
		if(error) {
			res.json({message: "couldn't find guest log to remove b/c "+error});
		}
		res.json({message: "guest log successfully deleted"});
	});

}

function updatePost(req,res) {
	var id = req.params.id;
	console.log("in the updatePost, got id from the url as "+id);
	GuestLog.findById({_id: id}, function(error,guestLogs) {
		console.log("in the updatePost, and inside the GuestLog.findbyid, and the guestLogs return is "+guestLogs);
		console.log("in the updatePost, and inside the GuestLogs.findByID, and the req.body is "+req.body);
		if(error) {
			res.json({message: "couldn't find guest log to update b/c "+error});
		}
		if(req.body.name) {
			guestLogs.name = req.body.name;
		}
		if(req.body.message) {
			guestLogs.message = req.body.message;
		}

		guestLogs.save(function(error) {
			if(error) {
				res.json({message: "couldn't save guest log b/c "+error});
			}
			res.json({message: 'guest log successfully update'});
		});
	});

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