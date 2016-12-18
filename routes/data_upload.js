var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data_upload', { title: 'data_upload' });
});

module.exports = router;
