const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var index = require('./routes/index'), inquiry = require('./routes/inquiry'),
	transaction = require('./routes/transaction'), payment = require('./routes/payment'),
	reversal = require('./routes/reversal'),report = require('./routes/report'), log = require('./routes/log');

app.use('/', index);
app.use('/inquiry', inquiry);
app.use('/transaction', transaction);
app.use('/payment', payment);
app.use('/reversal', reversal);
app.use('/report', report);
app.use('/log', log);

app.use("*",function(req, res, next){
	res.status(404).json({"status" : "404"});
	next();
});

var server = app.listen(config.httpPort, function() {
	console.log('\x1b[36m%s\x1b[0m','The HTTP server is running on port '+config.httpPort+'. Codebase: '+config.appName+'');
});
