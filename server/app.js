var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var session = require('express-session');
var sess = require('./utils/session');
const fs = require('fs');
// const db = require('./static/database').db;
// const pgSession = require('connect-pg-simple')(session);


var index = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news');
var ladderinfo = require('./routes/ladderinfo');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'static')));

// secret key for signing session, JWT
const secret = fs.readFileSync(path.join(__dirname, 'utils', 'ca', 'private.key'), 'utf8');
// Sessions
app.use(cookieParser(secret));
app.use(sess(app.get('env') !== 'development' || app.get('port') === 443 ));

// TODO: intermediate key with publicly signed key for production deployment
// Routes
app.use('/', index);
app.use('/api/users', users);
app.use('/api/news', news);
app.use('/api/ladderinfo', ladderinfo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
