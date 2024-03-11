const toggleTheme = document.querySelector(".toggle-theme");
const moon = toggleTheme.firstElementChild;
const sun = toggleTheme.lastElementChild;

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", "light");
	}
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", "dark");
	}
}

if (localStorage.getItem("theme") === "light") {
	document.body.classList.add("light-theme");
	moon.style.display = "none";
	sun.style.display = "inline-block";
} else {
	document.body.classList.remove("light-theme");
	moon.style.display = "inline-block";
	sun.style.display = "none";
}

toggleTheme.onclick = (event) => {
	document.body.classList.toggle("light-theme");

	if (document.body.classList.contains("light-theme")) {
		localStorage.setItem("theme", "light");
		moon.style.display = "none";
		sun.style.display = "inline-block";
	} else {
		localStorage.setItem("theme", "dark");
		moon.style.display = "inline-block";
		sun.style.display = "none";
	}
};