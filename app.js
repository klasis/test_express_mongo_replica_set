var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
mongoose.connect('mongodb://172.30.1.20:27017,172.30.1.20:27018,172.30.1.20:27019', {
  user: 'admin',
  pass: 'admin',
  dbName: 'test',
  replicaSet: 'rs0'
});
mongoose.connection.on('connected', () => console.log('DB connected'));
mongoose.connection.on('open', () => console.log('DB open'));
mongoose.connection.on('disconnected', () => console.log('DB disconnected'));
mongoose.connection.on('reconnected', () => console.log('DB reconnected'));
mongoose.connection.on('disconnecting', () => console.log('DB disconnecting'));
mongoose.connection.on('close', () => console.log('DB close'));



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
app.use('/users', usersRouter);

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
