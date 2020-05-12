var body;

colourMode = 0;
function toggle_dark_mode() {
	if (colourMode == 0) {
		// Dark?
		body.classList.add("dark-mode");
		localStorage.setItem("mode", "dark");
	} else {
		// Standard
		body.classList.remove("dark-mode");
		localStorage.setItem("mode", "light");
	}
	colourMode = (colourMode + 1) % 2;
}

document.addEventListener("DOMContentLoaded", function() {
	window.body = document.getElementsByTagName('body')[0];
	if (localStorage.getItem("mode") === "dark") {

		body.classList.add("notransition");
		toggle_dark_mode();
		body.offsetHeight;
		body.classList.remove("notransition");
    }
});
