const emailInput = document.getElementById("email");
const emailAlert = document.getElementById("emailAlert");

const passwordInput = document.getElementById("password");
const passwordAlert = document.getElementById("passwordAlert");

// Login Validation
function validateEmail(email) {
	let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (regex.test(email)) {
		emailAlert.classList.replace("d-block", "d-none");
		emailInput.classList.remove("is-invalid");
		emailInput.classList.add("is-valid");
	} else {
		emailAlert.classList.replace("d-none", "d-block");
		emailInput.classList.add("is-invalid");
		emailInput.classList.remove("is-valid");
	}
}

emailInput.addEventListener("keyup", () => {
	validateEmail(emailInput.value);
});

function validatePassword(password) {
	let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	let isValid;
	if (regex.test(password)) {
		passwordAlert.classList.replace("d-block", "d-none");
		passwordInput.classList.remove("is-invalid");
		passwordInput.classList.add("is-valid");
		isValid = true;
	} else {
		passwordAlert.classList.replace("d-none", "d-block");
		passwordInput.classList.add("is-invalid");
		passwordInput.classList.remove("is-valid");
		isValid = false;
	}
	return isValid;
}

passwordInput.addEventListener("keyup", () => {
	validatePassword(passwordInput.value);
});

const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();
	const user = {
		username: emailInput.value,
		password: passwordInput.value,
	};
	localStorage.setItem("user", JSON.stringify(user));
	window.location.href = "home.html";
});
