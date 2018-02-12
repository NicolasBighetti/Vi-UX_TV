function menuClick() {
	document.getElementById('gridDisplay').style.display = 'none';
	document.getElementById('contextualPopup').style.display = 'inline';
	document.getElementById('envoye').style.display = 'none';
	isPopUpMenu = true;
};

function recordClick() {
	document.getElementById('gridDisplay').style.display = 'none';
	document.getElementById('contextualPopup').style.display = 'none';
	document.getElementById('envoye').style.display = 'inline';
	setTimeout(envoyeClick, 3000);
	isPopUpMenu = false;
};

function envoyeClick() {
	document.getElementById('gridDisplay').style.display = 'inline';
	document.getElementById('contextualPopup').style.display = 'none';
	document.getElementById('envoye').style.display = 'none';
	isPopUpMenu = false;
};
