function menuClick() {
	document.getElementById('menu').style.display = 'none';
	document.getElementById('record').style.display = 'inline';
	document.getElementById('envoye').style.display = 'none';
};

function recordClick() {
	document.getElementById('menu').style.display = 'none';
	document.getElementById('record').style.display = 'none';
	document.getElementById('envoye').style.display = 'inline';
};

function envoyeClick() {
	document.getElementById('menu').style.display = 'inline';
	document.getElementById('record').style.display = 'none';
	document.getElementById('envoye').style.display = 'none';
};