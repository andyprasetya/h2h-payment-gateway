var express = require('express');
var router = express.Router();
var moment = require('moment');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var config = require('../config/config');

router.get('/', function(req, res, next) {
  res.render('index', { title: config.appName});
});

router.get('/alive', function(req, res, next) {
  dataurl = ''+config.baseEndPoint+'/alive';
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			res.json(data);
		}
	};
	xhr.open('GET', dataurl);
	xhr.send();
});

router.get('/version', function(req, res, next) {
  dataurl = ''+config.baseEndPoint+'/version';
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			res.json(data);
		}
	};
	xhr.open('GET', dataurl);
	xhr.send();
});

module.exports = router;
