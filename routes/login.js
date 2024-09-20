const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const pool = require('../models/accessDB');
const auth = require('../models/login')

router.get('/', (req, res, next) => {
  console.log(req.user)
  res.render('login');
})
router.post('/',passport.authenticate('local',{failureRedirect:'/login',session:true}), function (req, res) {

  res.redirect('/blogs');
});




module.exports = router;

