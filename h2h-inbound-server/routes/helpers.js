var helpers = {};
helpers.parseJsonToObject = function(str){
  try{
    var obj = JSON.parse(str);
    return obj;
  } catch(e){
    return {};
  }
};
helpers.currentDateFormatNow = function() {
	var dtstr = new Date().toISOString().slice(0,10);
	return dtstr;
}
helpers.currentYearExpirationDate = function() {
	var dtstr = new Date().toISOString().slice(0,4);
	return dtstr+'-12-31';
}
helpers.isoUTCDTFormatNow = function() {
	var ISOdt = new Date().toISOString().slice(0,19);
	return ISOdt+'Z';
}

module.exports = helpers;
