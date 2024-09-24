var express = require('express');
const getAllUserData = require('../models/getAllUserData')
const auth_admin=require('../models/auth_admin')
var router = express.Router();

/* GET home page. */
router.get('/',auth_admin, function (req, res, next) {
  getAllUserData(req, res, next);
});

module.exports = router;
