define(["jquery","bootstrap","datatables","underscore","cryptosha1"], function($) {
	$(function() {
		resetSessionStorage();
		attachTopNavFunction();
		createKickstartHome();
	});
});
