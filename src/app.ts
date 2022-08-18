var createError = require('http-errors');
//var express = require('express');
import express , {Application, Request, Response, NextFunction} from 'express';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

//importing routes 
//var indexRouter = require('./routes/index');
var guardRouter = require('./routes/guard');
var indexRouter = require('./routes/index');
//src\routes\guard.ts


var app = express();

// view engine setup23
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port',port);
app.set('port', process.env.PORT || port);  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

//DataBase setup
let mongoose = require('mongoose');
let DB = require('./db');
mongoose.connect(DB.URI);

//Mongoose connection
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console,"Connection Error"));
mongoDB.once('open', ()=>{
  console.log('Connection to MongoDB established');
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Custumizing router path
app.use('/', indexRouter);
app.use('/guards', guardRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:any, req:Request, res:Response, next:NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, ()=>{
  console.log(`Listen on port ${port}`);
})

module.exports = app;
