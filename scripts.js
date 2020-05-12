colourMode = 0;
function toggle_dark_mode() {
	if (colourMode == 0) {
		// Dark?
		document.getElementsByTagName('html')[0].style.cssText = "--bg-color: #000000; --hl-color: #eeeeee; --ac-color: #444444; --fg-color: #ffffff;";
	} else {
		// Standard
		document.getElementsByTagName('html')[0].style.cssText = "--bg-color: #092e37; --hl-color: #e8f1f3; --ac-color: #659fad; --fg-color: #ffffff;";
	}
	colourMode = (colourMode + 1) % 2;
}