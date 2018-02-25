function menuClick() {
	document.getElementById('gridDisplay').style.display = 'none';
	document.getElementById('contextualPopup').style.display = 'inline';
	document.getElementById('envoye').style.display = 'none';
	isPopUpMenu = true;
	speak('Indiquez clairement votre problème à haute voix!')
};

function recordClick() {
	document.getElementById('gridDisplay').style.display = 'none';
	document.getElementById('contextualPopup').style.display = 'none';
	document.getElementById('envoye').style.display = 'inline';
	setTimeout(envoyeClick, 3000);
	speak('Votre problème a bien été communiqué!')
	isPopUpMenu = false;
};

function envoyeClick() {
	document.getElementById('gridDisplay').style.display = 'inline';
	document.getElementById('contextualPopup').style.display = 'none';
	document.getElementById('envoye').style.display = 'none';
	isPopUpMenu = false;
};
