const express=require('express');
const router=express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const pool = require('../models/accessDB');
require('dotenv').config();

router.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: false }));
router.use(passport.initialize());
router.use(passport.session());
router.get('/',(req,res,next)=>{

  res.render('login');
})
router.post('/', passport.authenticate('local', { failureRedirect: '/fail' }), function (req, res) {
  res.redirect('blogs');
});

passport.use(new LocalStrategy({
  // id, pw のそれぞれのinputのnameと合わせる
  usernameField: 'name',
  passwordField: 'password',
  session: true,
  passReqToCallback: false,
}, function (input_name, input_password, done) {
  const sql = `select * from user where name = '${input_name}'`

  pool.query(sql).then((result)=>{
    const login_data = result[0];
    if (!login_data) return done(null, false, { message: 'account does not exist' })
    if (input_password == login_data.password) {
      return done(null, login_data)
    }else {
      return done(null, false, { message: 'wrong password' })
    }
    }
    // function (err, result) {
    //
    //   // login_data = result[0]
    //   if (err) return done(err)
    //   if (!login_data) return done(null, false, { message: 'account does not exist' })
    //   if (input_pw == login_data.pw) {
    //     return done(null, login_data)
    //   } else {
    //     return done(null, false, { message: 'wrong password' })
    //   }
    // }
    ).catch((error)=>console.log(error))
}));

passport.serializeUser(function (user, done) {
  done(null, user.id)
});
passport.deserializeUser(function (user_name_saved, done) {
  // ユーザーの情報をDBから探す
  const sql = `select * from user where name = '${user_name_saved}'`
  pool.query(sql).then((result)=>done(null, result[0])).catch((err)=>console.log(err));


});


module.exports=router;

