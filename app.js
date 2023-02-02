/*
Auto Generated Express code. 
*/
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Route import
const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
// End of Route import

const app = express();

// view engine configuration
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

//MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Indicating to express application to use the created Controllers, routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
  next(createError(404));
});
// catch a 404

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
// render my error pug file.

module.exports = app;
