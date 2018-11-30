var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var fs=require("fs");
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
module.exports.test = function(req, res) {
  res.render("land1.html", { status: "success" });
};
//login
module.exports.test1 = function(req, res) {
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/signin.html', failureFlash: true }),
	function (req, res) {
		res.redirect('/index.html');
	}

  //res.render("signin.html", { status: "success" });
};
module.exports.test2 = function(req, res) {
  res.render("signup.html", { status: "success" });
};
module.exports.test3 = function(req, res) {
  res.render("signin.html", { status: "success" });
};
module.exports.logout = function(req, res) {
  req.logout();

	//req.flash('success_msg', 'You are logged out');

	res.redirect('/');
};

module.exports.createCinema = function(req, res) {
  Cinema.create(
    {
      id: 1,
      cinema_name: "cineplex",
      location: "model town",
      capacity: 200,
      reserved: 3,
      goldPrice: 940,
      silverPrice: 340,
      rating: 3,
      description: "Best in town",
      movList: [
        {
          movieid: 1,
          title: "the nun",
          genre: "horror",
          language: "english",
          rating1: 2,
          image:
          {
            data: fs.readFileSync('./public/img/thumbnails/aquaman.jpg').toString('base64'),
            contentType : 'image/jpg'
          },
          description1: "dmscmf",
          timeS: [
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            },
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            }
          ]
        },
        {
          movieid: 2,
          title: "the moonstone",
          genre: "horror",
          language: "english",
          rating1: 2,
          description1: "dsdsdff",
          timeS: [
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            },
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            }
          ]
        }
      ]
    },
    function(err, cinema) {
      if (err) {
        console.log(err);
      } else {
        console.log(cinema);
        res.render("index.html", { cinemaData: cinema });
      }
    }
  );
};
