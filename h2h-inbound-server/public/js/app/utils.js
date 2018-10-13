function createKickstartHome () {
	var SAPUI5HTMLKomponente = "" +
		"<div class='row' style='margin:20px;'>" +
			"<div class='col-md-12'>" +
				"<nav aria-label='breadcrumb'>" +
					"<ul class='breadcrumb'>" +
						"<li class='breadcrumb-item'>End-Point: </li>" +
						"<li class='breadcrumb-item'>alive or </li>" +
						"<li class='breadcrumb-item' aria-current='page'>version</li>" +
					"</ul>" +
				"</nav>" +
				"<hr/>" +
				"<form id='testform' name='testform'>" +
					"<div class='form-row'>" +
						"<div class='form-group col-md-6'>" +
							"<button type='button' id='checkalive' name='checkalive' class='btn btn-default'><i class='fa fa-link'></i>&nbsp;Check: alive</button>" +
						"</div>" +
						"<div class='form-group col-md-6'>" +
							"<button type='button' id='checkversion' name='checkversion' class='btn btn-primary'><i class='fa fa-rocket'></i>&nbsp;Check: version</button>" +
						"</div>" +
					"</div>" +
				"</form>" +
				"<hr/>" +
				"<div class='card text-white bg-dark mb-3'>" +
					"<div class='card-header'>Response</div>" +
					"<div class='card-body'><pre class='text-white' id='responsebodystring'></pre></div>" +
				"</div>" +
			"</div>" +
		"</div>" +
		"";
	document.getElementById('app').innerHTML = SAPUI5HTMLKomponente;
	helpers._SAP_machstPrufen();
}
function attachTopNavFunction () {
	$('#navbarCollapse a.nav-link.flat').on('click', function(e){
		e.stopImmediatePropagation();
		var menuid = $(this).attr('id');
		$('.navbar-collapse').collapse('hide');
		switch(menuid){
			case 'home':
				helpers._clear_div('app');
				createKickstartHome();
				break;
			case 'inquiry':
				helpers._clear_div('app');
				var SAPUI5HTMLKomponente = "" +
					"<div class='row' style='margin:20px;'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>End-Point: </li>" +
									"<li class='breadcrumb-item'>41110</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>"+ menuid +"</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<form id='testform' name='testform'>" +
								"<input type='hidden' id='context' name='context' value='41110'/>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-4'>" +
										"<label for='perceptorid'>Kode Bank</label>" +
										"<input type='text' class='form-control' id='perceptorid' name='perceptorid' placeholder='Kode Bank'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='channelid'>Channel ID</label>" +
										"<input type='text' class='form-control' id='channelid' name='channelid' placeholder='Channel ID'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='terminalid'>Terminal ID</label>" +
										"<input type='text' class='form-control' id='terminalid' name='terminalid' placeholder='Terminal ID'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<label for='objectid'>NOP SPPT</label>" +
										"<input type='text' class='form-control' id='objectid' name='objectid' placeholder='NOP SPPT'>" +
									"</div>" +
									"<div class='form-group col-md-6'>" +
										"<label for='taxyear'>Tahun Pajak</label>" +
										"<input type='text' class='form-control' id='taxyear' name='taxyear' placeholder='Tahun Pajak'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<button type='button' id='resetform' name='resetform' class='btn btn-default'><i class='fa fa-snowflake'></i>&nbsp;Reset</button>" +
									"</div>" +
									"<div class='form-group col-md-6 text-right'>" +
										"<button type='submit' id='submitform' name='submitform' class='btn btn-primary'><i class='fa fa-paper-plane'></i>&nbsp;Send</button>" +
									"</div>" +
								"</div>" +
							"</form>" +
							"<hr/>" +
							"<div class='card text-white bg-dark mb-3'>" +
								"<div class='card-header'>Response</div>" +
								"<div class='card-body'><pre class='text-white' id='responsebodystring'></pre></div>" +
							"</div>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = SAPUI5HTMLKomponente;
				helpers._SAP_machstAnfrage();
				break;
			case 'transaction':
				helpers._clear_div('app');
				var SAPUI5HTMLKomponente = "" +
					"<div class='row' style='margin:20px;'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>End-Point: </li>" +
									"<li class='breadcrumb-item'>41110</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>trx</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<form id='testform' name='testform'>" +
								"<input type='hidden' id='context' name='context' value='41110'/>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-4'>" +
										"<label for='perceptorid'>Kode Bank</label>" +
										"<input type='text' class='form-control' id='perceptorid' name='perceptorid' placeholder='Kode Bank'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='channelid'>Channel ID</label>" +
										"<input type='text' class='form-control' id='channelid' name='channelid' placeholder='Channel ID'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='terminalid'>Terminal ID</label>" +
										"<input type='text' class='form-control' id='terminalid' name='terminalid' placeholder='Terminal ID'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-12'>" +
										"<label for='objectid'>Kode Billing</label>" +
										"<input type='text' class='form-control' id='objectid' name='objectid' placeholder='Kode Billing'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<button type='button' id='resetform' name='resetform' class='btn btn-default'><i class='fa fa-snowflake'></i>&nbsp;Reset</button>" +
									"</div>" +
									"<div class='form-group col-md-6 text-right'>" +
										"<button type='submit' id='submitform' name='submitform' class='btn btn-primary'><i class='fa fa-paper-plane'></i>&nbsp;Send</button>" +
									"</div>" +
								"</div>" +
							"</form>" +
							"<hr/>" +
							"<div class='card text-white bg-dark mb-3'>" +
								"<div class='card-header'>Response</div>" +
								"<div class='card-body'><pre class='text-white' id='responsebodystring'></pre></div>" +
							"</div>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = SAPUI5HTMLKomponente;
				helpers._SAP_machstTrx();
				break;
			case 'payment':
				helpers._clear_div('app');
				var SAPUI5HTMLKomponente = "" +
					"<div class='row' style='margin:20px;'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>End-Point: </li>" +
									"<li class='breadcrumb-item'>41110</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>"+menuid+"</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<form id='testform' name='testform'>" +
								"<input type='hidden' id='context' name='context' value='41110'/>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-4'>" +
										"<label for='perceptorid'>Kode Bank</label>" +
										"<input type='text' class='form-control' id='perceptorid' name='perceptorid' placeholder='Kode Bank'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='channelid'>Channel ID</label>" +
										"<input type='text' class='form-control' id='channelid' name='channelid' placeholder='Channel ID'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='terminalid'>Terminal ID</label>" +
										"<input type='text' class='form-control' id='terminalid' name='terminalid' placeholder='Terminal ID'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<label for='objectid'>Kode Billing</label>" +
										"<input type='text' class='form-control' id='objectid' name='objectid' placeholder='Kode Billing'>" +
									"</div>" +
									"<div class='form-group col-md-6'>" +
										"<label for='trxamount'>Jumlah Pembayaran</label>" +
										"<input type='text' class='form-control text-right' id='trxamount' name='trxamount' placeholder='0'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-12'>" +
										"<label for='noref'>Nomor Referensi</label>" +
										"<input type='text' class='form-control' id='noref' name='noref' placeholder='Nomor Referensi'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<button type='button' id='resetform' name='resetform' class='btn btn-default'><i class='fa fa-snowflake'></i>&nbsp;Reset</button>" +
									"</div>" +
									"<div class='form-group col-md-6 text-right'>" +
										"<button type='submit' id='submitform' name='submitform' class='btn btn-primary'><i class='fa fa-paper-plane'></i>&nbsp;Send</button>" +
									"</div>" +
								"</div>" +
							"</form>" +
							"<hr/>" +
							"<div class='card text-white bg-dark mb-3'>" +
								"<div class='card-header'>Response</div>" +
								"<div class='card-body'><pre class='text-white' id='responsebodystring'></pre></div>" +
							"</div>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = SAPUI5HTMLKomponente;
				helpers._SAP_machstZahlung();
				break;
			case 'reversal':
				helpers._clear_div('app');
				var SAPUI5HTMLKomponente = "" +
					"<div class='row' style='margin:20px;'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>End-Point: </li>" +
									"<li class='breadcrumb-item'>41110</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>"+menuid+"</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<form id='testform' name='testform'>" +
								"<input type='hidden' id='context' name='context' value='41110'/>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-4'>" +
										"<label for='perceptorid'>Kode Bank</label>" +
										"<input type='text' class='form-control' id='perceptorid' name='perceptorid' placeholder='Kode Bank'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='channelid'>Channel ID</label>" +
										"<input type='text' class='form-control' id='channelid' name='channelid' placeholder='Channel ID'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='terminalid'>Terminal ID</label>" +
										"<input type='text' class='form-control' id='terminalid' name='terminalid' placeholder='Terminal ID'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<label for='objectid'>Kode Billing</label>" +
										"<input type='text' class='form-control' id='objectid' name='objectid' placeholder='Kode Billing'>" +
									"</div>" +
									"<div class='form-group col-md-6'>" +
										"<label for='noref'>Nomor Referensi</label>" +
										"<input type='text' class='form-control' id='noref' name='noref' placeholder='Nomor Referensi'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<button type='button' id='resetform' name='resetform' class='btn btn-default'><i class='fa fa-snowflake'></i>&nbsp;Reset</button>" +
									"</div>" +
									"<div class='form-group col-md-6 text-right'>" +
										"<button type='submit' id='submitform' name='submitform' class='btn btn-primary'><i class='fa fa-paper-plane'></i>&nbsp;Send</button>" +
									"</div>" +
								"</div>" +
							"</form>" +
							"<hr/>" +
							"<div class='card text-white bg-dark mb-3'>" +
								"<div class='card-header'>Response</div>" +
								"<div class='card-body'><pre class='text-white' id='responsebodystring'></pre></div>" +
							"</div>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = SAPUI5HTMLKomponente;
				helpers._SAP_machstUmkehrung();
				break;
			case 'report':
				helpers._clear_div('app');
				var SAPUI5HTMLKomponente = "" +
					"<div class='row' style='margin:20px;'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>End-Point: </li>" +
									"<li class='breadcrumb-item'>41110</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>"+menuid+"</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<form id='testform' name='testform'>" +
								"<input type='hidden' id='context' name='context' value='41110'/>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-4'>" +
										"<label for='perceptorid'>Kode Bank</label>" +
										"<input type='text' class='form-control' id='perceptorid' name='perceptorid' placeholder='Kode Bank'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='channelid'>Channel ID</label>" +
										"<input type='text' class='form-control' id='channelid' name='channelid' placeholder='Channel ID'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='terminalid'>Terminal ID</label>" +
										"<input type='text' class='form-control' id='terminalid' name='terminalid' placeholder='Terminal ID'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<button type='button' id='resetform' name='resetform' class='btn btn-default'><i class='fa fa-snowflake'></i>&nbsp;Reset</button>" +
									"</div>" +
									"<div class='form-group col-md-6 text-right'>" +
										"<button type='submit' id='submitform' name='submitform' class='btn btn-primary'><i class='fa fa-paper-plane'></i>&nbsp;Send</button>" +
									"</div>" +
								"</div>" +
							"</form>" +
							"<hr/>" +
							"<div class='card text-white bg-dark mb-3'>" +
								"<div class='card-header'>Response</div>" +
								"<div class='card-body'><pre class='text-white' id='responsebodystring'></pre></div>" +
							"</div>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = SAPUI5HTMLKomponente;
				helpers._SAP_machstBericht();
				break;
			case 'log':
				helpers._clear_div('app');
				var SAPUI5HTMLKomponente = "" +
					"<div class='row' style='margin:20px;'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>End-Point: </li>" +
									"<li class='breadcrumb-item'>41110</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>"+menuid+"</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<form id='testform' name='testform'>" +
								"<input type='hidden' id='context' name='context' value='41110'/>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-4'>" +
										"<label for='perceptorid'>Kode Bank</label>" +
										"<input type='text' class='form-control' id='perceptorid' name='perceptorid' placeholder='Kode Bank'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='channelid'>Channel ID</label>" +
										"<input type='text' class='form-control' id='channelid' name='channelid' placeholder='Channel ID'>" +
									"</div>" +
									"<div class='form-group col-md-4'>" +
										"<label for='terminalid'>Terminal ID</label>" +
										"<input type='text' class='form-control' id='terminalid' name='terminalid' placeholder='Terminal ID'>" +
									"</div>" +
								"</div>" +
								"<div class='form-row'>" +
									"<div class='form-group col-md-6'>" +
										"<button type='button' id='resetform' name='resetform' class='btn btn-default'><i class='fa fa-snowflake'></i>&nbsp;Reset</button>" +
									"</div>" +
									"<div class='form-group col-md-6 text-right'>" +
										"<button type='submit' id='submitform' name='submitform' class='btn btn-primary'><i class='fa fa-paper-plane'></i>&nbsp;Send</button>" +
									"</div>" +
								"</div>" +
							"</form>" +
							"<hr/>" +
							"<div class='card text-white bg-dark mb-3'>" +
								"<div class='card-header'>Response</div>" +
								"<div class='card-body'><pre class='text-white' id='responsebodystring'></pre></div>" +
							"</div>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = SAPUI5HTMLKomponente;
				helpers._SAP_machstLog();
				break;
			default:
				helpers._clear_div('app');
				console.log('__UNDEFINED__');
				break;
		}
		return false;
	});
}
function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && storage.length !== 0;
	}
}
