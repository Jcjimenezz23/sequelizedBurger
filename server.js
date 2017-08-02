//requiring dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//importing the model burger.js file
var db = require("./models/");

//setting up express app
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//
app.use(bodyParser.urlencoded({
 	extended: false 
}));

//Override with POST having the delete method (?_method=DELETE)
app.use(methodOverride("_method"));

//setting handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ 
	defaultLayout: "main" 
}));

app.set("view engine", "handlebars");

//importing the routes from the burgers_controller.js file
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
 		console.log("Listening on port:%s", PORT);
	});
})
