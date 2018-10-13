## [Kickstart]

This is just a small sample implementation of H2H Payment Gateway. You can learn how it works by reviewing the codes, particularly in `/routes` directory.

### Installation steps:
```
$ git clone https://github.com/andyprasetya/h2h-payment-gateway.git
$ cd h2h-payment-gateway/h2h-inbound-server
$ npm install
```
### Configure the server:
Open `/config/config.js` and fill the `clientId`, `clientKey`, `jwtId`, `signature`, `baseEndPoint` entries with credential entries given by the vendor.
Sample `config.js` file:
```
var environments = {};
environments.staging = {
  'appName' : '[Kickstart]',
  'httpPort' : 4000,
  'envName' : 'staging',
  'clientId' : '49197243fae42986ee034781115d256fcb0a53bd81580c2676e026bc6a715f60',
  'clientKey' : 'f6928e56a51f6141a10b455c23e1320c6abf7935b64314486dd6e2ea6608f49e',
  'jwtId' : '759d80210b26678177af1535642e8b65b8eba15b7514478e969a31b13a8a1c53',
  'signature' : 'e1b84d5d32e8dbb61477e6feb30296f83f4d4bd6a13f5e61364a4a23e8f1eba8',
  'baseEndPoint' : 'http://123.1.23.4/endpoint',
	'basePrefix' : ''
};
environments.production = {
  'appName' : '[Kickstart]',
  'httpPort' : 4050,
  'envName' : 'production',
  'clientId' : '49197243fae42986ee034781115d256fcb0a53bd81580c2676e026bc6a715f60',
  'clientKey' : 'f6928e56a51f6141a10b455c23e1320c6abf7935b64314486dd6e2ea6608f49e',
  'jwtId' : '759d80210b26678177af1535642e8b65b8eba15b7514478e969a31b13a8a1c53',
  'signature' : 'e1b84d5d32e8dbb61477e6feb30296f83f4d4bd6a13f5e61364a4a23e8f1eba8',
  'baseEndPoint' : 'http://123.1.23.4/endpoint',
	'basePrefix' : ''
};
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
module.exports = environmentToExport;
```
### Running the app:
```
$ npm start
```
Or better (for development/staging environment - you should install Nodemon first with `npm install -g nodemon` as superuser):
```
$ nodemon ./index.js
```
### Accessing the frontend
Open your browser (Chrome is recommended, of course), open the app at:
```
http://localhost:4000/
```
-- Enjoy! --
