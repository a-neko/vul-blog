var express = require('express');
var isAdmin = require('../models/is_admin')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  isAdmin(req, res, next);
});

module.exports = router;
