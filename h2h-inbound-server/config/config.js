var environments = {};
environments.staging = {
  'appName' : '[Kickstart]',
  'httpPort' : 4000,
  'envName' : 'staging',
  'clientId' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'clientKey' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'jwtId' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'signature' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'baseEndPoint' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
	'basePrefix' : ''
};
environments.production = {
  'appName' : '[Kickstart]',
  'httpPort' : 4050,
  'envName' : 'production',
  'clientId' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'clientKey' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'jwtId' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'signature' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
  'baseEndPoint' : '__[SUPPLY_WITH_CREDENTIAL_ACCESS]__',
	'basePrefix' : ''
};
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
module.exports = environmentToExport;
