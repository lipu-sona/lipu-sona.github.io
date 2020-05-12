colourMode = 0;
function toggle_dark_mode() {
	if (colourMode == 0) {
		// Dark?
		document.getElementsByTagName('html')[0].style.cssText = "--main-bg-color: #000000; --highlight-bg-color: #eeeeee; --opposite-bg-color: #ffffff; --main-txt-color: #ffffff; --opposite-txt-color: #444444;";
	} else { 
		// Standard
		document.getElementsByTagName('html')[0].style.cssText = " --main-bg-color: #092e37; --highlight-bg-color: #e8f1f3; --opposite-bg-color: #ffffff; --main-txt-color: #ffffff; --opposite-txt-color: #659fad;";
	}
	colourMode = (colourMode + 1) % 2;
}