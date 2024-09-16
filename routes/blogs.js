const passport = require('passport');
const express=require('express');
const router=express.Router();



router.get('/',passport.authenticate('local'),function(req, res, next) {

  res.render('blogs', { title: 'Express' });
});
module.exports = router;
