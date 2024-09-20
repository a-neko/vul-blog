var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var blogsRouter = require('./routes/blogs');
var signupRouter = require('./routes/signup');
const session = require("express-session");
const passport = require("passport");
const {Strategy: LocalStrategy} = require("passport-local");
const pool = require("./models/accessDB");


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter, blogsRouter);
app.use('/blogs', blogsRouter);
app.use('/signup', signupRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

passport.use(new LocalStrategy({
      usernameField: 'name',
      passwordField: 'password'
    },
    function (name, password, done) {
      // sqlinjection
      const sql = `select * from user where name='${name}'`;
      pool.query(sql).then((data) => {
        const user = data[0][0];


        if (user.password != password) {
          return done(null, false, {message: 'ユーザー名およびパスワードが間違っています。'});
        }

        return done(null, user);
      })


    })
);


passport.serializeUser(function (user, done) {
  done(null, user.id)
});
passport.deserializeUser(function (user_name_saved, done) {
  // ユーザーの情報をDBから探す

  const sql = `select * from user where id = '${user_name_saved}'`

  pool.query(sql).then((result) => {
    done(null, result[0])
  }).catch((err) => console.log(err));


});


module.exports = app;
