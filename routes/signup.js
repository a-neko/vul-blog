var express = require('express');

var router = express.Router();
const signup=require('../models/signup')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post('/', function(req, res, next) {
  signup(req,res,next);
});

module.exports = router;
