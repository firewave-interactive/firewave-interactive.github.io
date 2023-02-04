footer = function() {
	document.querySelector(".date-year").innerText = new Date().getFullYear();
}

footer();

cookieConsent = function() {
	document.addEventListener("DOMContentLoaded", function() {
		const cookieConsent = document.querySelector(".cookie-consent");
		const cookieConsentButton = document.querySelector(".cookie-consent-button");

		if (!localStorage.getItem("cookieConsent")) {
			cookieConsent.style.display = "block";
		}

		cookieConsent.addEventListener("click", function(event) {
			event.preventDefault();
		});

		cookieConsentButton.addEventListener("click", function() {
			localStorage.setItem("cookieConsent", true);
			cookieConsent.style.display = "none";
		});
	});
}

cookieConsent();