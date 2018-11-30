const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const watch_schema=mongoose.Schema({
    cinema_name : {
        type : String,
        required : true

    },
    movie_name : {
        type : String,
        required : true

    },
    rating2 : {
        type : Number,
        required : true

    }
});

//define schema here
const user_schema=mongoose.Schema({

    
    username : {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true

    },
    email: {
        type : String,
        required : true

    },
    city : {
        type : String,
        required : true

    },
    watchhist:[
        watch_schema
    ]

    
});
var usersdb = mongoose.model("usersdb", user_schema);
module.exports = usersdb;
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

//var usersdb = module.exports = mongoose.model('usersdb',user_schema); 