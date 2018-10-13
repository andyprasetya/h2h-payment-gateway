var helpers = {
	_clear_div: function (divtarget) {
		divtarget = typeof divtarget !== 'undefined' ? divtarget : 'app';
		document.getElementById(divtarget).innerHTML = "";
	},
	_SAP_machstPrufen: function () {
		$('#checkalive').on('click', function(evt){
			evt.stopImmediatePropagation();
			document.getElementById('responsebodystring').innerHTML = '';
			fetch('/alive')
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(errorconfig){
					console.log(errorconfig);
				});
			return false;
		});
		$('#checkversion').on('click', function(evt){
			evt.stopImmediatePropagation();
			document.getElementById('responsebodystring').innerHTML = '';
			fetch('/version')
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(errorconfig){
					console.log(errorconfig);
				});
			return false;
		});
	},
	_SAP_machstAnfrage: function () {
		$('#testform').submit(function(evt){
			evt.preventDefault();
			var perceptorid = $('#perceptorid').val();
			var channelid = $('#channelid').val();
			var terminalid = $('#terminalid').val();
			var context = $('#context').val();
			var objectid = $('#objectid').val();
			var taxyear = $('#taxyear').val();
			var url = '/inquiry/'+perceptorid+'/'+channelid+'/'+terminalid+'/'+context+'/'+objectid+'/'+taxyear+'';
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(err){
					console.log(err);
				});
		});
		$('#resetform').on('click', function(evt){
			evt.stopImmediatePropagation();
			$('#testform')[0].reset();
			document.getElementById('responsebodystring').innerHTML = '';
			return false;
		});
	},
	_SAP_machstTrx: function () {
		$('#testform').submit(function(evt){
			evt.preventDefault();
			var perceptorid = $('#perceptorid').val();
			var channelid = $('#channelid').val();
			var terminalid = $('#terminalid').val();
			var context = $('#context').val();
			var objectid = $('#objectid').val();
			var url = '/transaction/'+perceptorid+'/'+channelid+'/'+terminalid+'/'+context+'/'+objectid+'';
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(err){
					console.log(err);
				});
		});
		$('#resetform').on('click', function(evt){
			evt.stopImmediatePropagation();
			$('#testform')[0].reset();
			document.getElementById('responsebodystring').innerHTML = '';
			return false;
		});
	},
	_SAP_machstZahlung: function () {
		$('#testform').submit(function(evt){
			evt.preventDefault();
			var perceptorid = $('#perceptorid').val();
			var channelid = $('#channelid').val();
			var terminalid = $('#terminalid').val();
			var context = $('#context').val();
			var objectid = $('#objectid').val();
			var trxamount = $('#trxamount').val();
			var noref = $('#noref').val();
			var url = '/payment/'+perceptorid+'/'+channelid+'/'+terminalid+'/'+context+'/'+objectid+'/'+trxamount+'/'+noref+'';
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(err){
					console.log(err);
				});
		});
		$('#resetform').on('click', function(evt){
			evt.stopImmediatePropagation();
			$('#testform')[0].reset();
			document.getElementById('responsebodystring').innerHTML = '';
			return false;
		});
	},
	_SAP_machstUmkehrung: function () {
		$('#testform').submit(function(evt){
			evt.preventDefault();
			var perceptorid = $('#perceptorid').val();
			var channelid = $('#channelid').val();
			var terminalid = $('#terminalid').val();
			var context = $('#context').val();
			var objectid = $('#objectid').val();
			var noref = $('#noref').val();
			var url = '/reversal/'+perceptorid+'/'+channelid+'/'+terminalid+'/'+context+'/'+objectid+'/'+noref+'';
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(err){
					console.log(err);
				});
		});
		$('#resetform').on('click', function(evt){
			evt.stopImmediatePropagation();
			$('#testform')[0].reset();
			document.getElementById('responsebodystring').innerHTML = '';
			return false;
		});
	},
	_SAP_machstBericht: function () {
		$('#testform').submit(function(evt){
			evt.preventDefault();
			var perceptorid = $('#perceptorid').val();
			var channelid = $('#channelid').val();
			var terminalid = $('#terminalid').val();
			var context = $('#context').val();
			var url = '/report/'+perceptorid+'/'+channelid+'/'+terminalid+'/'+context+'';
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(err){
					console.log(err);
				});
		});
		$('#resetform').on('click', function(evt){
			evt.stopImmediatePropagation();
			$('#testform')[0].reset();
			document.getElementById('responsebodystring').innerHTML = '';
			return false;
		});
	},
	_SAP_machstLog: function () {
		$('#testform').submit(function(evt){
			evt.preventDefault();
			var perceptorid = $('#perceptorid').val();
			var channelid = $('#channelid').val();
			var terminalid = $('#terminalid').val();
			var context = $('#context').val();
			var url = '/log/'+perceptorid+'/'+channelid+'/'+terminalid+'/'+context+'';
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(function(data){
					document.getElementById('responsebodystring').innerHTML = JSON.stringify(data, null, 2);
				})
				.catch(function(err){
					console.log(err);
				});
		});
		$('#resetform').on('click', function(evt){
			evt.stopImmediatePropagation();
			$('#testform')[0].reset();
			document.getElementById('responsebodystring').innerHTML = '';
			return false;
		});
	}
};
