requirejs.config({
	"paths": {
		"underscore": [
			/* "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min", */
			"./lib/underscore-min"
		],
		"cryptosha1": [
			"./lib/crypto_sha1"
		],
		"jquery": [
			/* "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min", */
			"./lib/jquery"
		],
		"bootstrap": [
			/* "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min", */
			"./lib/bootstrap.bundle.min"
		],
		"datatables": "./lib/datatables/datatables.min",
		"app": "../js/app"
	},
	"shim": {
		"bootstrap": ["jquery"],
		"datatables": ["jquery"],
		"underscore": {
			exports: '_'
		}
	}
});
requirejs(["app/config","app/main","app/helpers","app/utils","app/datatables"]);
