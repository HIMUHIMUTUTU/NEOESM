var express = require('express');
var router = express.Router();
var setting = require('../setting/setting.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	if((req.query.user && setting.user.indexOf(req.query.user) == -1) || (req.query.place && setting.place.indexOf(req.query.place) == -1 ) || (req.query.sum && req.query.sum.length > 10)){
		res.render('caution', {message: "invalid url"});
	}else{
		res.render('report', { title: 'report', setting:setting, user:req.query.user, place:req.query.place, sum:req.query.sum });
	}
});

module.exports = router;
