/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   3 May 2020
; Modified by: Sarah Kovar
; Description: Create security layer using JSON Web Tokens (JWT).
;===========================================
*/

// Require statement that imports the header.js file from my root directory
//const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
//console.log(header.display('Sarah', 'Kovar', 'Exercise 1.4'));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var indexRouter = require('./routes/index');

var apiCatalog = require('./routes/api-catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/api', apiCatalog);

/**
*
Database connection
*/
mongoose.connect('mongodb://admin:admin@ds121588.mlab.com:21588/mean-library', {   
promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
