var body;

colourMode = 0;
pu = 0;
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

function toggle_pu() {
	if (pu == 0) {
		// Dark?
		body.classList.add("pu");
		localStorage.setItem("wordlist", "pu");
		document.getElementById('show_nonpu').style.display = "inherit";
		document.getElementById('hide_nonpu').style.display = "none";
	} else {
		// Standard
		body.classList.remove("pu");
		localStorage.setItem("wordlist", "nonpu");
		document.getElementById('show_nonpu').style.display = "none";
		document.getElementById('hide_nonpu').style.display = "inherit";
	}
	pu = (pu + 1) % 2;
}
document.addEventListener("DOMContentLoaded", function() {
	window.body = document.getElementsByTagName('body')[0];
	if (localStorage.getItem("mode") === "dark") {

		body.classList.add("notransition");
		toggle_dark_mode();
		body.offsetHeight;
		body.classList.remove("notransition");
    }
	if (localStorage.getItem("wordlist") === "pu") {
		toggle_pu();
    }
});


function play(sound) {
    var snd = new Audio('../sound/' + sound + '.mp3');
    snd.play();
}