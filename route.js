const express = require("express");
const router = express.Router();



var ctrlLocations = require("../controllers/movie-list");
var ctrlLocations1 = require("../controllers/popC");
var ctrlLocations2 = require("../controllers/payC");
var ctrlLocations3 = require("../controllers/userC");
var ctrlLocations4 = require("../controllers/watchC");
//var ctrlOthers=require('../controllers/others');
var ctrlLocations5 = require("../controllers/cineC");
var ctrlLocations6 = require("../controllers/selectC");
var ctrlLocations7 = require("../controllers/landC");
var ctrlLocations8 = require("../controllers/sumC");

router.get("/index.html", ctrlLocations7.createCinema);
router.get("/", ctrlLocations7.test);
//router.post("/index.html", ctrlLocations7.test1 );
router.get("/land1.html", ctrlLocations7.test);
router.get("/signin.html", ctrlLocations7.test3);
router.post("/signin.html", ctrlLocations7.test1);
router.get("/signout",ctrlLocations7.logout)
router.get("/signup.html", ctrlLocations7.test2);
router.post("/signup.html", ctrlLocations2.userCreate);
router.get("/index.html", ctrlLocations.movielist);
router.post("/pop.html/:movie_name", ctrlLocations1.savePop);
router.get("/pop.html", ctrlLocations1.nothing);
router.get("/payment.html", ctrlLocations2.nothing1);
router.get("/user.html", ctrlLocations3.nothing2);
router.get("/watchhist.html", ctrlLocations4.nothing3);
router.get("/cinemalist.html", ctrlLocations5.nothing4);
router.get("/select.html", ctrlLocations6.nothing5);

router.get("/landing.html", ctrlLocations7.logout);
router.get("/paymentsummary.html", ctrlLocations8.nothing7);
router.post("/pop.html", ctrlLocations1.savePop);
//const movie=require('../models/showtimedb');;

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


//passport

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});
















//router.get('/homePage', (req, res, next) => {
//logic for displaying movies list
//  movie.find(function(err,movie){
//   res.json(movie);

// })
//});
/*
router.post('/homePage', (req, res, next) => {
    let newMovie=new movie({
        id: req.body.id,
        name :req.body.name,
        location :req.body.location,
        capacity :req.body.capacity,
        reserved :req.body.reserved,
        silverPrice :req.body.silverPrice,
        goldPrice :req.body.goldPrice,
        rating: req.body.rating,
        description: req.body.description,
        
      
        id1: req.body.id1,
        title :req.body.title,
        description1: req.body.description1,
        genre: req.body.genre,
        rating1: req.body.rating1,
        language:req.body.language,

        time:req.body.time,
        date:req.body.date,
        reservedS:req.body.reservedS
        

    });
    newMovie.save((err,movie)=>{
        if(err)
        {
            res.json({msg: 'failed to add movie'+err});
        }
        else{
            res.json({msg: 'contact added succesfully'});
        }
    });
});
*/

module.exports = router;
