var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var myController = require('../controllers/controllers.js');

//my personal API
router.route('/profile')
	.get(myController.returnAll)
	.post(myController.postProfile);
router.route('/guestbook')
	.get(myController.getAllGuestLogs)
	.post(myController.postNewLog);
router.route('/guestbook/:id')
	.get(myController.getOneGuestsLogs)	
	.delete(myController.removePost)
	.put(myController.updatePost);

module.exports = router;