
const express=require('express');
const router=express.Router();
const is_login =require('../models/login')


router.get('/',is_login,function(req, res, next) {
  res.render('blogs', { title: 'Express' });
});
module.exports = router;
