var express = require('express');
const getAllUserData = require('../models/getAllUserData')

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  getAllUserData(req, res, next);
});

module.exports = router;
