const passport = require('passport');
const express = require('express');
const router = express.Router();
const auth = require('../models/login');
const is_login = require('../models/is_login')
const getAllBlogs = require('../models/getAllblogs')

router.get('/', is_login, function (req, res, next) {

  getAllBlogs(req, res, next);


});

router.get('/post', is_login, function (req, res, next) {

  res.render('blogs/post')


});

module.exports = router;
