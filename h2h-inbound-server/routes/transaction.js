var express = require('express');
var router = express.Router();
var btoa = require('btoa');
var fetch = require('node-fetch');
var config = require('../config/config');
var helpers = require('./helpers');

router.use(function timeLog (req, res, next) {
  next();
});

router.get('/:perceptorid/:channelid/:terminalid/:context/:objectid', function (req, res) {
  var context = req.params.context;
  var perceptorid = req.params.perceptorid, channelid = req.params.channelid, terminalid = req.params.terminalid, objectid = req.params.objectid, 
  encodedRequestTokenHeader = btoa(JSON.stringify({"dt":helpers.isoUTCDTFormatNow(),"clientid":config.clientId,"clientkey":config.clientKey,"pcpcode":perceptorid,"channelid":channelid,"terminalid":terminalid})),
  encodedRequestTokenPayload = btoa(JSON.stringify({"iss":"http://temanggungkab.go.id","sub":"TRANSACTION","aud":"BANK","exp":helpers.currentYearExpirationDate(),"nbf":helpers.currentDateFormatNow(),"iat":"TEMANGGUNG","jti":config.jwtId,"context":context,"subcontext":"trx","objectid":objectid})),
  encodedRequestTokenSignature = btoa(JSON.stringify({"signature":config.signature}));

  var encodedRequestToken = encodedRequestTokenHeader+'.'+encodedRequestTokenPayload+'.'+encodedRequestTokenSignature;

  // Fetch-API style - POST, dengan Body yang diabaikan
  fetch(config.baseEndPoint+'/'+context+'/trx', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "token" : encodedRequestToken
    }
  })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      res.json(data);
    })
    .catch(function(err){
      res.json({"Server Message":""+err+""});
    });
});
module.exports = router;
