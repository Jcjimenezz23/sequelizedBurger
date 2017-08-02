//requiring dependencies
var express = require("express");
var router = express.Router();

//importing the model burger.js file
var db = require("../models/");

//creating routes
router.get("/", function(req, res) {
	db.Burger.findAll()

	.then(function(data) {

		res.render("index", {burgers: data});
	});
});

router.post("/burgers/create", function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name
	})


	 .then(function(data) {
			res.redirect("/");
		});
});

router.put("/burgers/:id", function(req, res) {

	//update that the buger has been devoured
	db.Burger.update({
		devoured: true
	},
	{
		where: {
			id: req.body.burgerId
		} 
	})

	.then(function(data) {
		res.redirect("/");
	});
});

//exporting routes to server.js
module.exports = router;