const express=require('express');
const router=express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const pool = require('../models/accessDB');
const auth=require('../models/login')

router.get('/',(req,res,next)=>{

  res.render('login');
})
router.post('/', passport.authenticate('local', { failureRedirect: '/login'}), function (req, res) {

  res.redirect('/blogs');
});


auth();

module.exports=router;

