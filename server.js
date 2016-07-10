// require express and other modules
var express = require('express'),
    app = express();
  var path = require('path');
  var logger = require('morgan');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/************
 * DATABASE *
 ************/

// var db = require('./models');
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/personal-api");


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));
var routes = require('./config/routes');
app.use(routes);

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/jscovern/express_self_api/README.md", // CHANGE ME
    base_url: "https://secret-sands-46458.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/profile", description: "Shows all available profiles"}, // CHANGE ME
      {method: "POST", path: "/profile", description: "Creates a new profile, with the _id that you provide in the req.body"},
      {method: "GET", path: "/guestbook", description: "Shows all available guestbook logs"},
      {method: "POST", path: "/guestbook", description: "Creates a new guestbook log, and gives it the _id from the request body"},
      {method: "GET", path: "/guestbook/:id", description: "Index - displays the guestbook log for the id you provided"},
      {method: "DELETE", path: "/guestbook/:id", description: "Deletes the guestbook log for the id you provided in the URL"},
      {method: "PUT", path: "/guestbook/:id", description: "Updates the Name and/or Message fields based on what you provided"}
    ]
  });
});

router.route('/guestbook/:id')
  .get(myController.getOneGuestsLogs) 
  .delete(myController.removePost)
  .put(myController.updatePost);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
