const passport = require('passport');
const express = require('express');
const router = express.Router();
const auth = require('../models/login');
const is_login = require('../models/is_login');
const getAllBlogs = require('../models/getAllblogs');
const postBlog = require('../models/post');
const getUserId=require('../models/getUserId');

router.get('/', passport.authenticate('local',{failureRedirect:'/login',session:true}), function (req, res, next) {
  const userId=getUserId(req,res,next);
  console.log(req.session.passport);
  getAllBlogs(req, res, next);


});

router.get('/post', passport.authenticate('local',{failureRedirect:'/login',session:true}), function (req, res, next) {
  console.log(req.user);
  res.render('blogs/post')


});

router.post('/post', is_login, function (req, res, next) {
  // const userId=getUserId();

  postBlog(req, res, next);
  res.redirect('blogs/blogs')
});

module.exports = router;
