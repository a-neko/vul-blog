const passport = require('passport');
const express = require('express');
const router = express.Router();
const auth = require('../models/login');
const is_login = require('../models/is_login');
const getAllBlogs = require('../models/getAllblogs');
const postBlog = require('../models/post');
const getUserId=require('../models/getUserId');
const getPostData=require('../models/getPostData')
router.get('/', is_login, function (req, res, next) {


  getAllBlogs(req, res, next);


});

router.get('/post', is_login, function (req, res, next) {
  console.log(req.user);
  res.render('blogs/post')


});

router.post('/post', is_login, function (req, res, next) {

  postBlog(req, res, next);
  res.redirect('/blogs')
});

router.get('/:id',is_login,function (req,res,next){
  const postId=Number(req.params.id);
  getPostData(req,res,next,postId);

})
module.exports = router;
