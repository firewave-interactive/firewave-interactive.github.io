function theme() {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
		document.body.classList.add("light-theme");
	}
}

function footer() {
	const dateYear = document.getElementById("date-year");

	dateYear.innerText = new Date().getFullYear();
}

function loading() {
	window.addEventListener("load", function() {
		setInterval(function() {
			document.body.classList.add("loaded");
		}, 1500);
	});
}

theme();
footer();
loading();