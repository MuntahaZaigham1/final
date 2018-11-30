var express = require("express");
var fs=require("fs");
var mongoose = require("mongoose");
var db1 = require("./app_server/models/db");
var http = require("http");
//var path = require('path');
var request = require("request");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyparser = require('body-parser');
//var cors = require("cors");
var path = require("path");
var app = express();
//const ejsLint = require("ejs-lint");
//define route
const route = require("./app_server/routes/route");

app.set("views", path.join(__dirname, "app_server", "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//adding static files
app.use(express.static(path.join(__dirname, "public")));
//routes

app.use("/", route);


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(session({
  secret: 'secret1',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

  while(namespace.length) {
    formParam += '[' + namespace.shift() + ']';
  }
  return {
    param : formParam,
    msg   : msg,
    value : value
  };
}
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
res.locals.user = req.user || null;
next();
});





//app.use("/api", route1);
//connect to mongodb
//mongoose.connect("mongodb://localhost:27017/ticketing_web");
/*var dbURI = "mongodb://localhost:27017/ticketing_web";

if (process.env.NODE_ENV === "production") {
  //just to test I have placed this url
   //dbURI = "mongodb://shamsa:shamsa123@ds263571.mlab.com:63571/loc8r";
}
mongoose.connect(
  dbURI,
  { useNewUrlParser: true }
);

//on connection
mongoose.connection.on("connected", () => {
  console.log("connected to db mongodb");
});

//on error
mongoose.connection.on("error", err => {
  if (err) {
    console.log("error in db connection" + err);
  }
});
*/
//testing server
/*
app.get("/", (req, res) => {
  res.send("foobar");
});
app.listen(port, () => {
  console.log("server started at port no :" + port);
});
*/
var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
