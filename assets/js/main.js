footer = () => {
	document.querySelector(".footer-copyright-y").innerText = new Date().getFullYear();
}

cookieConsent = () => {
	document.addEventListener("DOMContentLoaded", (event) => {
		const cookieConsent = document.querySelector(".cookie-consent");
		const cookieConsentButton = document.querySelector(".cookie-consent-button");

		if (localStorage.getItem("cookie-consent")) {
			cookieConsent.style.display = "none";
		} else {
			cookieConsent.style.display = "block";
		}

		cookieConsent.onclick = (event) => {
			event.preventDefault();
		};

		cookieConsentButton.onclick = (event) => {
			localStorage.setItem("cookie-consent", true);
			cookieConsent.style.display = "none";
		};
	});
};

theme = () => {
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
};

const hostnames = [
	"firewave-interactive.github.io",
	"firewave-interactive.com.br",
	"firewave-interactive.com",
	"firewave-interactive.org",
	"firewave-interactive.net",
	"kolpa-engine.github.io",
	"kolpa-engine.com.br",
	"kolpa-engine.com",
	"kolpa-engine.org",
	"kolpa-engine.net",
	"localhost",
	"127.0.0.1"
];

let hostnameMatchFound = false;

hostnames.forEach((hostname) => {
	if (window.location.hostname === hostname) {
		hostnameMatchFound = true;
		return;
	}
});

if (hostnameMatchFound) {
	footer();
	cookieConsent();
	theme();
} else {
	alert('This site has not been authorized to use our services.\nBy FireWave Interactive.');
}
