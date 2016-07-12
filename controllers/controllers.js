var Profile = require('../models/profile');
var GuestLog = require('../models/guestLogs');
//INDEX

function returnAll(req,res) { //this works
	Profile.find({},function(error, profiles) {
		if(error) response.json({message: 'Could not find any profiles'});
		res.json(profiles);
	});
}

function postProfile(req,res) { //this works
	var profile = new Profile(req.body);
	profile.save(function(error) {
		if(error) res.json({message: "Could not create quote b/c: "+error});
	});
	res.redirect('/profile');
}

function getAllGuestLogs(req,res) { //this works
	GuestLog.find({},function(error,guestLogs) {
		if(error) res.json({message: "Could not find any guest logs "+error});
		res.json(guestLogs);
	});
}

// function findHighestID() {
// 	var highestID = 0;
// 	GuestLog.find({}, function(error,guestLogs) {
// 		if(error){ console.log(error);}
// 		console.log("guestLogs length is "+guestLogs.length);
// 		for (var i=0; i<guestLogs.length; i++) {
// 			console.log("id for guestLogs["+i+"] are "+guestLogs[i]._id);
// 			if(guestLogs[i]._id > highestID) {
// 				console.log("in the if highest");
// 				highestID = guestLogs[i]._id;
// 			}
// 		}
// 		return highestID;
// 	});
// }

function postNewLog(req,res) { //this works
	var log = new GuestLog(req.body);
	log.save(function(error) {
		if(error){ 
			res.json({message: "Could not create a new guest log b/c: "+error});
		}
		console.log(log);
		res.json(log);
	});
	//console.log("outputing this from postNewLog" +log);
	//var highestExisting = findHighestID();
	//var highestExisting = GuestLog.find({}).sort('-_id')[0];
	//console.log(highestExisting);
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

function updatePost(req,res) { //this works
	var id = req.params.id;
	GuestLog.findById({_id: id}, function(error,guestLogs) {
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