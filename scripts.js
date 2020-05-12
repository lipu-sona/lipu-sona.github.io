colourMode = 0;
function toggle_dark_mode() {
	if (colourMode == 0) {
		// Dark?
		document.getElementsByTagName('body')[0].classList.add("dark-mode");
	} else {
		// Standard
		document.getElementsByTagName('body')[0].classList.remove("dark-mode");
	}
	colourMode = (colourMode + 1) % 2;
}
