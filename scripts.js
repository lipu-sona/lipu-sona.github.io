colourMode = 0;
function toggle_dark_mode() {
	if (colourMode == 0) {
		// Dark?
		document.getElementsByTagName('body')[0].classList.add("dark-mode");
		localStorage.setItem("mode", "dark");
	} else {
		// Standard
		document.getElementsByTagName('body')[0].classList.remove("dark-mode");
		localStorage.setItem("mode", "light");
	}
	colourMode = (colourMode + 1) % 2;
}

if (localStorage.getItem("mode") === "dark") {
    window.onload = toggle_dark_mode;
}
