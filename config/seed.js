// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var mongoose = require('mongoose');
var conn = mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/personal-api");
var Profile = require('../models/profile');

var myProfile = {id: 1, name: "Jamie Scovern", github_link: "https://github.com/jscovern/", github_profile_image: "Hah!", current_city: "Denver, CO", pets: ["Riva", "Monty"]};

Profile.create(myProfile, function(error,data) {
	if(error) {console.log("error: "+error);}
	else {
		console.log("Created: ",data);
		mongoose.connection.close();
	}
});