//Module imported
const express = require('express');
require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentRouter = require('./routes/student');

//Instance of express js
const app = express();

//npm module related code
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Route defination
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student',studentRouter);

module.exports = app;
