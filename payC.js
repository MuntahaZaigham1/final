var request = require("request");
var bodyParser=require("body-parser");
var mongoose = require("mongoose");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var apiOptions = {
    server: "http://localhost:3000"
  }

//require('../models/usersdb');
var usersdb=require('../models/usersdb');
module.exports.nothing1 = function(req, res) {
    res.render("payment.html", {
    });
};
module.exports.userCreate = function(req, res) {
	
	console.log(req.body);
    var city1= req.body.city;
	 console.log(city1);
	//var email = req.body.email;
	//var username = req.body.username;
	//var password = req.body.password;
	//var password2 = req.body.password2;
	//remove name and add city
	
	/*// Validation
	req.checkBody('city', 'city is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
		res.render('signup.html', {
			errors: errors
		});
	}
	else {
		//checking for email and username are already taken
		usersdb.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, usersdb) {
			usersdb.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
					res.render('signup.html', {
						user: user,
						mail: mail
					});
				}
				else {
					var newUser = new usersdb({
						city: city,
						email: email,
						username: username,
						password: password
					});
					usersdb.createUser(newUser, function (err, usersdb) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('signin.html');
				}
			});
		});
	}
	*/
};

