const passport = require('passport');
const express=require('express');
const router=express.Router();
const auth=require('../models/login');
const is_login=require('../models/is_login')

router.get('/',is_login,function(req, res, next) {
  // console.log(req);

  res.render('blogs', { title: 'Express' });
});

module.exports = router;
