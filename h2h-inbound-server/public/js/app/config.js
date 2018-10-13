function resetSessionStorage () {
	if (storageAvailable('sessionStorage')) {
		sessionStorage.clear();
	} else {
		alert('Unsupported browser.');
	}
}
